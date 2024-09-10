import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
    const {userid} =  useParams()
    return (
        <div className=" bg-gray-500 text-3xl p-2 m-1 text-center text-white font-bold" >
            User: {userid}
        </div>
    )
}