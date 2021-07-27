import React from "react";
import Comp1 from "./Comp1";
import Pic from "./Images/edu.jpg";


const About = () => {

    return (
        <>
            <Comp1 name="Welcome want to know about" imgsrc={Pic} visit="/contact" btn="Contact Now" />
        </>
    );

};

export default About;