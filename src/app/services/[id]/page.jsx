import { getSingleService } from "@/actions/server/service";
import BookButton from "@/Components/Buttons/BookButton";
import React from "react";

const Service = async ({ params }) => {
  const {id}=await params;
  const service=await getSingleService(id);

  const { _id,service_name, category, description, pricePerHour, image, location } = service;

  return (
    <div className="w-full max-w-5xl mx-auto mb-[100px] p-6 bg-white rounded-2xl shadow-md border border-gray-100">
      <div className="w-full h-80 overflow-hidden rounded-xl mb-6">
        <img
          src={image || "/placeholder.png"}
          alt={service_name || "Service Image"}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <span className="inline-block mb-3 text-sm font-medium text-[#2563eb] bg-blue-50 px-3 py-1 rounded-full">
        {category}
      </span>

      <h1 className="text-3xl font-bold mb-4">{service_name}</h1>

      <p className="text-gray-600 mb-3 font-medium">
        Location: <span className="text-gray-800">{location || "N/A"}</span>
      </p>

      <p className="text-gray-700 mb-6">{description}</p>

      <p className="text-xl font-semibold mb-6">
        ৳{pricePerHour ?? 0} / hour
      </p>

      <BookButton serviceId={_id}></BookButton>
    </div>
  );
};

export default Service;
