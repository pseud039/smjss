import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import HomeHero from "./components/HomeHero";
import Footer from "./components/Footer";
import Homepage from "./pages/Home";


export default function App(){
    return(
        <BrowserRouter>
        <Navbar/>
        <Homepage/>
        <Footer/>
        </BrowserRouter>
    )
}