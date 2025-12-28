"use client";

import { deleteOrder, getOrders } from "@/actions/server/order";
import Loading from "@/Components/Loading/Loading";
import TextType from "@/Components/TextType";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const MyBookings = () => {
    const { data: session } = useSession();
    const [myOrders, setMyOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedOrderID, setSelectedOrderID] = useState("");
    const [viewOrder, setViewOrder] = useState(null);

    useEffect(() => {
        if (!session?.user?.email)
            return;
        const fetchOrders = async () => {
            try {
                setLoading(true);
                const data = await getOrders(session.user.email);
                setMyOrders(data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                toast.error("Failed to fetch bookings");
            }
        };
        fetchOrders();
    }, [session]);

    const openCancelModal = (orderID) => {
        setSelectedOrderID(orderID);
        document.getElementById("cancel_modal").showModal();
    };

    const closeCancelModal = () => {
        document.getElementById("cancel_modal").close();
        setSelectedOrderID("");
    };

    const handleCancelOrder = async () => {
        try {
            const res = await deleteOrder(selectedOrderID);
            if (res) {
                const remaining = myOrders.filter((order) => order._id !== selectedOrderID);
                setMyOrders(remaining);
                toast.success("Booking cancelled successfully");
            }
            closeCancelModal();
        } catch (error) {
            toast.error("Failed to cancel booking")
        }
    };

    const openViewModal = (order) => {
        setViewOrder(order);
        document.getElementById("view_modal").showModal();
    };

    const closeViewModal = () => {
        setViewOrder(null);
        document.getElementById("view_modal").close();
    };

    return (
        <div className="py-5 mx-5 mt-10 flex flex-col items-center min-h-screen bg-gray-50 font-inter">
            <div className='text-black text-3xl lg:text-[40px] font-bold text-center mb-10'>
                <TextType
                    text={"My Bookings"}
                    typingSpeed={100}
                    pauseDuration={1500}
                    showCursor={false}
                    startOnVisible={true}
                    deletingSpeed={0}
                    loop={false}
                />
            </div>

            {
                loading ? (
                    <div className="flex justify-center items-center my-10">
                        <Loading></Loading>
                    </div>
                ) : myOrders.length === 0 ? (
                    <div className="w-full flex justify-center items-center my-10">
                        <p className="text-2xl font-bold text-gray-500">NO BOOKINGS FOUND!</p>
                    </div>
                ) : (
                    <div className="w-full overflow-x-auto">
                        <table className="table-auto border-collapse w-full bg-white shadow rounded-lg">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2 border">SERVICE</th>
                                    <th className="px-4 py-2 border">DURATION</th>
                                    <th className="px-4 py-2 border">LOCATION</th>
                                    <th className="px-4 py-2 border">PRICE</th>
                                    <th className="px-4 py-2 border">STATUS</th>
                                    <th className="px-4 py-2 border">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myOrders.map((order) => (
                                        <tr key={order._id} className="text-center border-b">
                                            <td className="px-4 py-2">{order.service_name}</td>
                                            <td className="px-4 py-2">{order.duration} hrs</td>
                                            <td className="px-4 py-2">{`${order.division}, ${order.district}, ${order.city}, ${order.area}`}</td>
                                            <td className="px-4 py-2">৳{order.price}</td>
                                            <td className="px-4 py-2">{order.status.toUpperCase()}</td>
                                            <td className="px-4 py-2 flex flex-col gap-2">
                                                <button
                                                    className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 cursor-pointer"
                                                    onClick={() => openViewModal(order)}
                                                >
                                                    VIEW
                                                </button>
                                                {order.status === "pending" && (
                                                    <button
                                                        className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700 cursor-pointer"
                                                        onClick={() => openCancelModal(order._id)}
                                                    >
                                                        CANCEL
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                )}

            {/* Cancel Confirmation Modal */}
            <dialog id="cancel_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Cancel Booking</h3>
                    <p className="py-4">Are you sure you want to cancel this booking?</p>
                    <div className="modal-action">
                        <button className="btn btn-error" onClick={handleCancelOrder}>Yes</button>
                        <button className="btn" onClick={closeCancelModal}>No</button>
                    </div>
                </div>
            </dialog>

            {/* View Booking Modal */}
            <dialog id="view_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Booking Details</h3>
                    {
                        viewOrder && (
                            <div className="mt-4 space-y-2">
                                <p>
                                    <strong>Service:</strong> {viewOrder.service_name}
                                </p>
                                <p>
                                    <strong>Name:</strong> {viewOrder.name}
                                </p>
                                <p>
                                    <strong>Email:</strong> {viewOrder.email}
                                </p>
                                <p>
                                    <strong>Duration:</strong> {viewOrder.duration} hrs
                                </p>
                                <p>
                                    <strong>Price:</strong> ৳{viewOrder.price}
                                </p>
                                <p>
                                    <strong>Location:</strong>{" "}
                                    {`${viewOrder.division}, ${viewOrder.district}, ${viewOrder.city}, ${viewOrder.area}`}
                                </p>
                                <p>
                                    <strong>Status:</strong> {viewOrder.status.toUpperCase()}
                                </p>
                                <p>
                                    <strong>Created At:</strong>{" "}
                                    {
                                        new Date(viewOrder.createdAt).toLocaleString()
                                    }
                                </p>
                            </div>
                        )}
                    <div className="modal-action mt-4">
                        <button className="btn" onClick={closeViewModal}>Close</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MyBookings;
