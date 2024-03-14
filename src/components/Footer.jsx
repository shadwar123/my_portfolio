import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";



// import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="flex flex-row md:flex-col space-y-4 md:space-y-0">

                <div className="flex justify-center mt-20 mb-4">
                <div className="infoText mt-4 md:mt-0 ">
                    If you encounter any issues while connecting, please feel free to reach out to me directly on my LinkedIn.
                </div>
                </div>
                <div className="flex justify-center mb-20 ">
                    <div className="socialIcons flex flex-row mt-4 md:mt-0 md:ml-8 mb-20 space-x-4">
                        <span className="icon text-xl">
                            <FaFacebookF />
                        </span>
                        <span className="icon text-xl">
                            <FaInstagram />
                        </span>
                        <span className="icon text-xl">
                            <FaTwitter />
                        </span>
                        <span className="icon text-xl">
                            <a target="_blank" href="https://www.linkedin.com/in/shadwar-nayyar-492422226/"><FaLinkedin /></a>
                        </span>
                    </div>
                </div>

            </div>



        </footer>
    );
};

export default Footer;
