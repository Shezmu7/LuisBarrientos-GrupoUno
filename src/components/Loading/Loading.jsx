import React from "react";
import { RingLoader } from "react-spinners";
import "./Loading.css";

export default function Loading() {
    return (
        <div className="loading-container">
            <RingLoader color="darkblue" size="200" />
        </div>
    );
}
