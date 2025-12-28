"use client";

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { signIn } from "next-auth/react";
import toast from 'react-hot-toast';

const Login = () => {
    const params = useSearchParams();
    const router = useRouter();
    const callback = params.get("callbackUrl") || "/";
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const res = await signIn("credentials", {
            email: form.email,
            password: form.password,
            redirect: false,
            callbackUrl: params.get("callbackUrl") || "/"
        });

        if (res.ok) {
            toast.success("Logged in successfully");
            router.push(callback);
        }
        else
            toast.error("Login failed");

        setLoading(false);
    }

    const handleGoogleLogin = () => {
        signIn("google", {
            callbackUrl: callback
        });
    }

    return (
        <div className='w-full max-w-[1440px] h-screen flex items-center'>
            <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10 mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Welcome back</h2>
                <form onSubmit={handleSubmit}>
                    <input name="email" onChange={handleChange} className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="email" placeholder="Enter your email" required />
                    <input name="password" onChange={handleChange} className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4 mb-4" type="password" placeholder="Enter your password" required />
                    {
                        error &&
                        (<p className='text-red-500 text-sm mb-2 text-center'>{error}</p>)
                    }
                    <button disabled={loading} type="submit" className="w-full mb-3 bg-[#2563eb] font-medium py-2.5 rounded-full text-white cursor-pointer">{loading ? "Logging in..." : "Login"}</button>
                </form>
                <p className="text-center mt-4">Don’t have an account? <Link href={"/signup"} className="text-blue-500 underline">Signup</Link></p>
                <button onClick={handleGoogleLogin} type="button" className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800 cursor-pointer">
                    <img className="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png" alt="googleFavicon" />
                    Log in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;