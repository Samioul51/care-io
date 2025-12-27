import React from "react";

const ServiceCard = ({ service }) => {
  const {
    service_name,
    pricePerHour,
    image,
    category,
  } = service;

  return (
    <div className="w-full max-w-full mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
      {/* Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={service_name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block mb-2 text-sm font-medium text-[#2563eb] bg-blue-50 px-3 py-1 rounded-full">
          {category}
        </span>

        {/* Service Name */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {service_name}
        </h3>

        {/* Price */}
        <p className="text-gray-700 mb-4">
          <span className="font-semibold text-gray-900">
            ৳{pricePerHour}
          </span>{" "}
          / hour
        </p>

        {/* Button */}
        <button className="w-full mb-3 bg-[#2563eb] font-medium py-2.5 rounded-full text-white cursor-pointer hover:bg-blue-700 transition-colors">
          View Service
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
