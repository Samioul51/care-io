"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
    const { nid, name, email, contact, password } = payload;

    if (!email || !password)
        return { success: false };

    const usersCollection = await dbConnect(collections.USERS); // await here
    const isExist = await usersCollection.findOne({ email });

    if (isExist)
        return { success: false };

    const newUser = {
        provider: "credentials",
        nid,
        name,
        email,
        contact,
        password: await bcrypt.hash(password, 14),
        role: "user"
    };

    const res = await usersCollection.insertOne(newUser);

    return { ...res, insertedId: res.insertedId?.toString() };
};


export const loginUser=async (payload)=>{
    const {email,password,name}=payload;

    if(!email || !password)
        return null;

    const user=await dbConnect(collections.USERS).findOne({email});

    if(!user)
        return null;

    const isMatched=await bcrypt.compare(password,user?.password);

    if(isMatched)
        return user;
    return null;
};