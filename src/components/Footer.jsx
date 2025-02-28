import React from "react";
import {
    FaYoutube,
    FaLinkedin,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


// import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start py-8 px-3">

                <div className="text-xs sm:text-sm text-slate-300">
                    <div className="flex sm:text-xs">
                        <p className="">Privacy |</p>
                        <p className=" ml-1">Terms |</p>
                        <p className=" ml-1">Security Policy |</p>
                        <p className=" ml-1">Site Map</p>
                    </div>
                    <p className="mt-2 text-blue-400 text-xs">© Copyright 2003-2024 shadwarnayyar Inc.</p>
                </div>

                <div className="flex space-x-32 mt-4 sm:mt-0 justify-items-stretch sm:space-x-4 ">
                    <a href="https://www.linkedin.com/in/shadwar-nayyar-492422226/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="h-8 w-8 sm:h-6 sm:w-6 transition-colors" />
                    </a>
                    <a href="https://x.com/shadwar123" target="_blank" rel="noopener noreferrer">
                        <BsTwitterX className="h-8 w-8 sm:h-6 sm:w-6 transition-colors" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="h-8 w-8 sm:h-6 sm:w-6 transition-colors" />
                    </a>
                </div>
            </div>



        </footer>
    );
};

export default Footer;
