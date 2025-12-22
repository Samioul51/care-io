import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../../public/images/logo.png'
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-black p-10 text-white">
                <nav>
                    <Link href={"/"} className='flex flex-col gap-1 items-center'>
                        <Image
                            alt="CARE.IO"
                            src={logo}
                            width={50}
                            height={50}
                        ></Image>
                        <p className="text-xl font-bold">CARE.<span className='text-[#2563eb]'>IO</span></p>
                    </Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link href={"/"} className="link link-hover">Home</Link>
                    <Link href={"/services"} className="link link-hover">Services</Link>
                    <Link href={"#"} className="link link-hover">Contact</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link href={"#"} className="link link-hover">Terms of use</Link>
                    <Link href={"#"} className="link link-hover">Privacy policy</Link>
                    <Link href={"#"} className="link link-hover">Cookie policy</Link>
                </nav>

                <nav>
                    <h6 className="footer-title">Social</h6>
                    <Link href={"#"} className="link link-hover"><FaSquareXTwitter className='w-[20px] h-auto' /></Link>
                    <Link href={"#"} className="link link-hover"><FaFacebookSquare className='w-[20px] h-auto' /></Link>
                    <Link href={"#"} className="link link-hover"><FaLinkedin className='w-[20px] h-auto'/></Link>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;