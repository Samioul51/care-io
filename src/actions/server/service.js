"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getServices = async () => {
    const collection = await dbConnect(collections.SERVICES);
    const services=await collection.find().toArray();
    return services;
};

export const getFeaturedServices=async()=>{
    const collection = await dbConnect(collections.SERVICES);
    const services=await collection.find().sort({pricePerHour: -1}).limit(6).toArray();
    return services;
}

export const getSingleService = async (id) => {
    const query = { _id: new ObjectId(id) };
    const collection = await dbConnect(collections.SERVICES);
    const service=await collection.findOne(query);
    return service ? { ...service, _id: service._id.toString() } :{};
}