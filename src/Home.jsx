import React from "react";
import Comp1 from "./Comp1";
import Pic1 from "./Images/menu.jpg";
 
const Home = () => {

    return (
        <>
            <Comp1 name="Welcome here is my portfolio" imgsrc={Pic1} visit="/service" btn="Get started" />
        </>
    );

};

export default Home;