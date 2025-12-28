"use client";

import { useRouter } from "next/navigation";


const BookButton = ({ serviceId }) => {
    const router = useRouter();

    return (
        <button onClick={()=>router.push(`/booking/${serviceId}`)} className="w-full bg-[#2563eb] font-medium py-2.5 rounded-full text-white cursor-pointer hover:bg-blue-700 transition-colors">
            Book Service
        </button>
    );
}

export default BookButton;
