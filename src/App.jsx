import React from "react";
import Navbar from './Components/Navbar'
import FirstSection from './Components/FirstSection'
import Download from "./Components/Download";
import About from "./Components/About";

export default (props) => (
    <div>
        <Navbar></Navbar>
        <FirstSection> </FirstSection>
        <Download></Download>
        <About></About>
    </div>
)