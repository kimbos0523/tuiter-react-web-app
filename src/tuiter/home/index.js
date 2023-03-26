import React from "react";
import TuitList from "../tuits"
import "./index.css";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <>
           <div className={"row mt-2"}>
               <h4>Home</h4>
               <WhatsHappening/>
               <TuitList/>
           </div>
        </>
    );
};
export default HomeComponent;