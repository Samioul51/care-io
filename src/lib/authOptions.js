import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collections, dbConnect } from "./dbConnect";
import { loginUser } from "@/actions/server/auth";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials, req) {
                const user = await loginUser({
                    email: credentials.email,
                    password: credentials.password
                });
                return user;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            const isExist = await dbConnect(collections.USERS).findOne({
                email: user.email,
            });

            if (isExist)
                return true;

            const newUser = {
                provider: account?.provider,
                email: user.email,
                name: user.name,
                image: user.image,
                role: "user"

            };

            const res = await dbConnect(collections.USERS).insertOne(newUser);

            return res.acknowledged;

        },
        async session({ session, token, user }) {
            if (token) {
                session.role = token?.role;
                session.email = token?.email;
            }
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            console.log("account data in token", token);
            if (user) {
                if (account.provider == "google") {
                    const dbUser = await dbConnect(collections.USERS).findOne({
                        email: user.email,
                    });
                    token.role = dbUser?.role;
                    token.email = dbUser?.email;
                } else {
                    token.role = user?.role;
                    token.email = user?.email;
                }
            }
            return token;
        },
    },
}