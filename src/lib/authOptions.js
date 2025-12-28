import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collections, dbConnect } from "./dbConnect";
import { loginUser } from "@/actions/server/auth";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) 
            return null;

        const user = await loginUser({
          email: credentials.email,
          password: credentials.password,
        });

        if (!user) 
            return null;

        return user;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const collection=await dbConnect(collections.USERS);
        const existingUser = await collection.findOne({
          email: user.email,
        });

        if (!existingUser) {
          const newUser = {
            provider: "google",
            email: user.email,
            name: user.name,
            image: user.image,
            role: "user",
            createdAt: new Date(),
          };

          const collection2=await dbConnect(collections.USERS);
          const res = await collection2.insertOne(newUser);
          return res.acknowledged;
        }
      }

      return true;
    },

    async jwt({ token, user, account }) {
      if (user) {
        if (account?.provider === "google") {
          const collection=  await dbConnect(collections.USERS);
          const dbUser = await collection.findOne({
            email: user.email,
          });

          token.role = dbUser?.role || "user";
          token.email = dbUser?.email;
        } 
        else {
          token.role = user.role;
          token.email = user.email;
        }
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.email = token.email;
      }
      return session;
    },
  },
};
