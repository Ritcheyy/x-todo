import React from "react";
import "./style.css";

function Greeting({ hour, name }) {
    return (
        <div className="greeting">
            <h3 className="text-custom-primary font-weight-lighter mt-4">
                Good {hour > 0 && hour < 12 ? "Morning" : hour > 12 && hour < 16 ? "Afternoon" : "Evening"}
            </h3>
            <p className="text-custom-secondary font-weight-bold">{name}</p>
        </div>
    );
}

export default Greeting;
