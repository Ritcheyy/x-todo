import React from "react";
import "./style.css";

function AppClock({ date, day, month, time }) {
    return (
        <div className="clock text-center mt-5 mb-5">
            <div>
                <h1 className="text-custom-primary font-weight-normal">
                    {/* 12:00<span>00</span> */}
                    {time[0] + time[1] + ":" + time[3] + time[4]}
                    <span>{time[6] + time[7]}</span>
                </h1>

                <p className="date text-custom-secondary font-weight-normal">{day + " " + date + " " + month}</p>
            </div>
        </div>
    );
}

export default AppClock;
