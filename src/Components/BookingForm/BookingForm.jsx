"use client";

import React, { useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import divisionsData from "../../../public/data/division.json";
import locationsData from "../../../public/data/locations.json";
import { postOrder } from "@/actions/server/order";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const BookingForm = ({ service }) => {
    const { data: session } = useSession();
    const router=useRouter();

    const [duration, setDuration] = useState(1);
    const [price, setPrice] = useState(service.pricePerHour);
    const [division, setDivision] = useState("");
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [area, setArea] = useState("");
    const [loading,setLoading]=useState(false);

    const filteredDistricts = useMemo(() => {
        if (!division) return [];
        return locationsData
            .filter((loc) => loc.region === division)
            .map((loc) => loc.district);
    }, [division]);

    const filteredCities = useMemo(() => {
        if (!district) return [];
        return locationsData
            .filter((loc) => loc.district === district)
            .map((loc) => loc.city);
    }, [district]);

    const filteredAreas = useMemo(() => {
        if (!city) return [];
        return locationsData
            .filter((loc) => loc.city === city)
            .flatMap((loc) => loc.covered_area);
    }, [city]);


    const handleSubmit =async (e) => {
        e.preventDefault();
        const bookingData = {
            service_name: service.service_name,
            name: session?.user?.name,
            email: session?.user?.email,
            duration,
            price,
            division,
            district,
            city,
            area,
        };
        // console.log(bookingData);
        try{
            setLoading(true);
            const res=await postOrder(bookingData);
            setLoading(false);
            router.push("/");
            toast.success("Service booked successfully");
            
        }catch(error){
            setLoading(false);
            toast.error("Service booking failed");
        }

    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg flex flex-col gap-6"
        >
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Name</label>
                <input
                    type="text"
                    value={service.service_name}
                    readOnly
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                    type="text"
                    value={session?.user?.name || ""}
                    readOnly
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                    type="email"
                    value={session?.user?.email || ""}
                    readOnly
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration (hours)</label>
                <input
                    type="number"
                    min={1}
                    value={duration}
                    onChange={(e) => {
                        const newDuration = Number(e.target.value);
                        setDuration(newDuration);
                        setPrice(newDuration * service.pricePerHour);
                    }}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                <input
                    type="number"
                    value={price}
                    readOnly
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Division</label>
                <select
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                >
                    <option value="">Select Division</option>
                    {
                        divisionsData.map((div) => (
                            <option key={div} value={div}>{div}</option>
                        ))
                    }
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
                <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    disabled={!division}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                    <option value="">Select District</option>
                    {
                        filteredDistricts.map((d) => (
                            <option key={d} value={d}>{d}</option>
                        ))
                    }
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    disabled={!district}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                    <option value="">Select City</option>
                    {
                        filteredCities.map((c) => (
                            <option key={c} value={c}>{c}</option>
                        ))
                    }
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Area</label>
                <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    disabled={!city}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                    <option value="">Select Area</option>
                    {
                        filteredAreas.map((a) => (
                            <option key={a} value={a}>{a}</option>
                        ))
                    }
                </select>
            </div>

            <button disabled={loading}
                type="submit"
                className="w-full bg-[#2563eb] font-medium py-2.5 rounded-full text-white cursor-pointer hover:bg-blue-700 transition-colors"
            >
                {loading?"Confirming Booking...":"Confirm Booking"}
            </button>
        </form>
    );
};

export default BookingForm;
