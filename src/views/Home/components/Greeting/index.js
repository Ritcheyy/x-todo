import React from "react"
import "./style.css"

function Greeting(props) {
        return (
                <div className="greeting">
                        <h3 className="text-custom-primary font-weight-lighter mt-4">Good afternoon,</h3>
                        <p className="text-custom-secondary font-weight-bold">Ritchey</p>
                </div>
        )
}

export default Greeting
