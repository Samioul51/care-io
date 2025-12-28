"use server";

import { collections, dbConnect } from "@/lib/dbConnect";

export const postOrder=async(payload)=>{
    const newOrder={
        ...payload,
        status:"pending",
        createdAt:new Date()
    }

    const collection=await dbConnect(collections.ORDERS);
    const res=await collection.insertOne(newOrder); 

    return {
        success: res.acknowledged,
        orderId: res.insertedId
    };
}