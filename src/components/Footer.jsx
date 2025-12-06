import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn,FaCcMastercard,FaQrcode } from 'react-icons/fa';
import { RiVisaLine } from "react-icons/ri";
import { CiWallet,CiCreditCard1  } from "react-icons/ci";


import Logo from '../assets/logo.png';

function Footer() {
    return (
        <footer className="bg-[#1f1f1f] text-gray-300 p-7">
            <div className="max-w-5xl mx-auto ">

                <div className="flex flex-col lg:flex-row lg:items-start gap-8 ">
                    <div className="flex items-start gap-6 lg:flex-1">
                        <div className="w-20 h-15 bg-white flex items-center justify-center shadow-md">
                            <img src={Logo} alt="" />
                        </div>

                        <div>
                            <h3 className="text-white text-xl font-bold mb-2">About DMD Clothing</h3>
                            <p className="text-gray-300 max-w-2xl text-sm">
                                Premium trousers, consciously crafted in small batches using natural fabrics and meticulous
                                finishing. Slow-fashion ethics, timeless silhouettes, and everyday comfort—made in India for
                                people and the planet.
                            </p>
                        </div>
                    </div>

                    <div className="lg:ml-auto">
                        <button className="bg-[#b74131] text-white px-4 py-2 rounded-md shadow-lg hover:shadow-xl cursor-pointer transition">
                            Shop Trousers
                        </button>
                    </div>
                </div>

                <hr className="border-t border-gray-700 my-8" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-6">
                    <div>
                        <h4 className="text-sm text-white mb-2 tracking-wider">SHOP</h4>
                        <ul className="space-y-2">
                            <li className="hover:text-white cursor-pointer">All Trousers</li>
                            <li className="hover:text-white cursor-pointer">Formal</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm text-white mb-2 tracking-wider">HELP</h4>
                        <ul className="space-y-2">
                            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-white cursor-pointer">Refund Policy</li>
                            <li className="hover:text-white cursor-pointer">Terms & Condition</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm text-white mb-2 tracking-wider">ABOUT</h4>
                        <ul className="space-y-2">
                            <li className="hover:text-white cursor-pointer">Our Story</li>
                            <li className="hover:text-white cursor-pointer">Sustainability</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm text-white mb-2 tracking-wider">CONTACT</h4>
                        <div className="space-y-2">

                            <div className="flex items- text-sm gap-2 bg-[#111111] px-3 py-2 cursor-pointer  items-center rounded-full w-max">
                                <FiPhone className="text-gray-400" />
                                <span className="text-white">+91-7744844867</span>
                            </div>

                            <div className="flex items-center text-sm gap-2 bg-[#111111] px-3 py-2 cursor-pointer rounded-full w-max">
                                <FiMail className="text-gray-400" />
                                <span className="text-white">dmdcc.onlinestore@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-3 mt-4 cursor-pointer">
                                <a className="p-2 rounded-md border border-gray-700 hover:bg-[#b74131] transition">
                                    <FaFacebookF />
                                </a>
                                <a className="p-2 rounded-md border border-gray-700 hover:bg-[#b74131] transition">
                                    <FaInstagram />
                                </a>
                                <a className="p-2 rounded-md border border-gray-700 hover:bg-[#b74131] transition">
                                    <FaLinkedinIn />
                                </a>
                            </div>

                        </div>
                    </div>
 
                </div>

                <hr className="border-t border-gray-700 my-8" />

                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="text-sm text-gray-400">
                        © DMD Clothing — Made consciously in India.
                    </div>

                    <div className="flex items-center gap-1">
                         <div className="px-3 py-2 bg-[#111111] rounded-lg text-sm border border-gray-700 flex justify-between gap-2">
                            <FaQrcode size={20}/>
                            <span>UPI</span>
                         </div>
                        <div className="px-3 py-2 bg-[#111111] flex gap-2 justify-between rounded-lg text-sm border border-gray-700">
                            <RiVisaLine size={20}/>
                            <span>Visa</span>
                        </div>
                        <div className="px-3 py-2 bg-[#111111] rounded-lg text-sm border border-gray-700 flex justify-between gap-2">
                            <FaCcMastercard size={20}/>
                            <span>MasterCard</span>
                        </div>
                        <div className="px-3 py-2 bg-[#111111] rounded-lg text-sm border border-gray-700 flex justify-between gap-2">
                            <CiCreditCard1 size={20}/>
                            <span>RuPay</span>
                        </div>
                        <div className="px-3 py-2 bg-[#111111] rounded-lg text-sm border border-gray-700 flex justify-between gap-2">
                            <CiWallet size={20}/>
                            <span>Wallet</span>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
