import React from "react";
import Navbar from './Components/Navbar'
import AboutApp from './Components/AboutApp'
import Download from "./Components/Download";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";

export default (props) => (
    <div>
        <Navbar></Navbar>
        <AboutApp> </AboutApp>
        <Download></Download>
        <About></About>
        <Contacts></Contacts>
        <Footer></Footer>
    </div>
)