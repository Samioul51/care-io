import { dbConnect, collections } from "@/lib/dbConnect";

export async function GET() {
  try {
    const usersCollection = dbConnect(collections.USERS);
    const count = await usersCollection.countDocuments();

    return Response.json(
      { success: true, message: "MongoDB connected", count },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
