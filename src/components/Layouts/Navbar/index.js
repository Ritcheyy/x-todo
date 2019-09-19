import React from "react"
import "./style.css"
import {Link} from "react-router-dom"

function NavBar(props) {
        return (
                <ul className="nav justify-content-between mx-0 mb-0 mt-3">
                                {
                                        props.type === 'back' ?
                                                (
                                                        <li className="nav-item float-left ">
                                                                <Link to={props.url}>
                                                                        <img src={require('../../../assets/img/png/back-arrow.png')} className="nav-link pt-3 pb-3" alt="nav"/>
                                                                </Link>
                                                        </li>
                                                )
                                                :
                                                (
                                                        <li className="nav-item float-left ">
                                                                <img src={require('../../../assets/img/svg/hamburger.svg')} className="nav-link pt-3 pb-3" alt="nav"/>
                                                        </li>
                                                )
                                }
                        <li className="nav-item float-right">
                                <img src={require('../../../assets/img/png/profile-img.png')} className="nav-link"
                                     alt="nav"/>
                        </li>
                </ul>
        )
}


export default NavBar
