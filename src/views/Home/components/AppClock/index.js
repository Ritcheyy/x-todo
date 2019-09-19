import React from "react"
import "./style.css"

function AppClock() {
        return (
                <div className="clock text-center mt-5 mb-5">
                        <div>
                                <h1 className="text-custom-primary font-weight-normal">12:00<span>00</span></h1>
                                <p className="date text-custom-secondary font-weight-normal">Fri, 23 August</p>
                        </div>
                </div>
        )
}

export default AppClock
