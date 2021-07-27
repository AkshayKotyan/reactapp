import React from "react";
import { NavLink } from "react-router-dom";
// import Pic from "./Images/edu.jpg";
 
const Comp1 = (props) => {

    return (
        <>
            <section id="header" className=" d-flex align-items-center">
                <div className=" container-fluid">
                    <div className="row">
                        <div className=" col-10 mx-auto">
                            <div className="row">
                                <div className=" col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column div_content">
                                    <h1> {props.name} <strong className="brand-name"> Akshay Kotyan.</strong> </h1>
                                    <h2 className=' my-3'> Aiming to become Full Stack Web Developer.</h2>
                                    <div className=" mt-3">
                                        <NavLink exact to={props.visit} className="btn-get-started"> {props.btn} </NavLink>
                                    </div>
                                </div>
                                <div className=" col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} className=" img-fluid animated" alt="images"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );

};

export default Comp1;