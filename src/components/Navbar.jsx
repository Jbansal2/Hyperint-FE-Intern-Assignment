import React from "react";
import {
    RiSearchLine,
    RiHeartLine,
    RiUserLine,
    RiShoppingBagLine,
    RiArrowLeftLine
} from "react-icons/ri";
import Logo from "../assets/logo.png";
import AnnouncementBar from "./AnnouncementBar";

const Navbar = () => {
    return (
        <nav className="w-full bg-white sticky top-0 left-0 z-50 shadow-sm">
            <AnnouncementBar />
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between ">
                <div className="flex lg:flex-1 items-center">
                    <RiArrowLeftLine className="text-2xl cursor-pointer lg:hidden" />
                </div>

                <div className="flex flex-1 justify-center">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="h-20 lg:h-24 object-contain"
                    />
                </div>

                <div className="flex lg:flex-1 justify-end gap-6 text-xl text-black">
                    <RiSearchLine className="cursor-pointer" />
                    <RiHeartLine className="cursor-pointer hidden lg:block" />
                    <RiUserLine className="cursor-pointer hidden lg:block" />
                    <RiShoppingBagLine className="cursor-pointer" />
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
