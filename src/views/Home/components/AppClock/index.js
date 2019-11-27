import React from "react";
import "./style.css";

function AppClock({ date, day, month, time }) {
    return (
        <div className="clock text-center mt-5 mb-5">
            <div>
                <h1 className="text-custom-primary font-weight-normal">
                    {time.hour + ":" + time.minute }
                    <span>{time.second}</span>
                </h1>

                <p className="date text-custom-secondary font-weight-normal">{day + ", " + date + "th " + month}</p>
            </div>
        </div>
    );
}

export default AppClock;
