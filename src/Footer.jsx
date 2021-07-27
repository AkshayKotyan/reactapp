import React from "react";

const year = new Date().getFullYear();
const Footer = () => {
    return (
        <>
            <footer className=" w-100 bg-light text-center">
                <p> ©{year}Akshay Kotyan</p>
            </footer>
        </>
    );
};


export default Footer;