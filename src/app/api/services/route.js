import { dbConnect, collections } from "@/lib/dbConnect";

// All Services
export async function GET(request) {
  try {
    const servicesCollection = await dbConnect(collections.SERVICES);
    const services = await servicesCollection.find({}).toArray();

    return Response.json(services, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Failed to fetch services" },
      { status: 500 }
    );
  }
}

