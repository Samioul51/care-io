"use client";

import { postUser } from '@/actions/server/auth';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { signIn } from "next-auth/react";

const Signup = () => {
    const params = useSearchParams();
    const router = useRouter();
    const callbackUrl = params.get("callbackUrl") || "/";
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        nid: "",
        name: "",
        email: "",
        contact: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const res = await response.json();

            if (res.acknowledged) {
                const result = await signIn('credentials', {
                    email: form.email,
                    password: form.password,
                    redirect: false,
                    callbackUrl: callbackUrl,
                });
                if (result.ok) {
                    toast.success('Signed up successfully');
                    router.push(callbackUrl);
                } else {
                    toast.error('Login after signup failed');
                }
            } else {
                toast.error('Sign up failed');
            }
        } catch (err) {
            console.error(err);
            toast.error('Something went wrong');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className='w-full max-w-[1440px] h-screen flex items-center'>
            <div className="bg-white text-gray-500 max-w-96  md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10 mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <input name="nid" onChange={handleChange} className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="tel" placeholder="Enter your NID No" required />
                    <input name="name" onChange={handleChange} className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="text" placeholder="Enter your name" required />
                    <input name="email" onChange={handleChange} className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="email" placeholder="Enter your email" required />
                    <input name="contact" onChange={handleChange} className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="tel" placeholder="Enter your contact no" required />
                    <input name="password" onChange={handleChange} className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4 mb-4" type="password" placeholder="Enter your password" required />

                    <button disabled={loading} type="submit" className="w-full mb-3 bg-[#2563eb] font-medium py-2.5 rounded-full text-white cursor-pointer">{loading ? "Signing Up..." : "Sign Up"}</button>
                </form>
                <p className="text-center mt-4">Already Registered? <Link href={"/login"} className="text-blue-500 underline">Login</Link></p>
                <button type="button" className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800 cursor-pointer">
                    <img className="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png" alt="googleFavicon" />
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Signup;