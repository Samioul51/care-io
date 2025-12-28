"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { orderInvoiceTemplate } from "@/lib/orderInvoice";
import { sendEmail } from "@/lib/sendEmail";

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