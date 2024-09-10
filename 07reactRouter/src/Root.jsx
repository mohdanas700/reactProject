import React from "react";
import { Footer, Header, Home } from "./components";
import {Outlet} from 'react-router-dom'


function Root() {
    return (
        <>
        <Header />
        {/* Jaha pe bhi ham outlet denge react waha ki cheeze change kar dega */}
        <Outlet />
        <Footer />
        </>
    )
}

export default Root;