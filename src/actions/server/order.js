"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { orderInvoiceTemplate } from "@/lib/orderInvoice";
import { sendEmail } from "@/lib/sendEmail";
import { ObjectId } from "mongodb";

export const postOrder = async (payload) => {
    const newOrder = {
        ...payload,
        status: "pending",
        createdAt: new Date()
    }

    const collection = await dbConnect(collections.ORDERS);
    const res = await collection.insertOne(newOrder);

    await sendEmail({
        to: newOrder.email,
        subject: "Your Order Invoice - Care IO",
        html: orderInvoiceTemplate({
            order: newOrder
        }),
    });

    return {
        success: res.acknowledged,
        orderId: res.insertedId
    };
}

export const getOrders = async (email) => {
    if (!email)
        return [];

    const collection = await dbConnect(collections.ORDERS);
    const orders = await collection.find({ email }).sort({ createdAt: -1 }).toArray();
    return orders;
};

export const deleteOrder = async (id) => {
    const collection = await dbConnect(collections.ORDERS);
    const res = await collection.deleteOne({ _id: new ObjectId(id) });
    return res.acknowledged;
}