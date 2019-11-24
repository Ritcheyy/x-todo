import React from "react";
import "./style.css";
import { withRouter, Link } from "react-router-dom";
import Slide from "react-reveal/Slide";

class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            openMenu: false
        };
    }

    logout = () => {
        window.localStorage.removeItem("name");
        this.props.history.go();
    };

    toggleNav = state => {
        this.setState({ openMenu: state });
    };
    render() {
        return (
            <React.Fragment>
                <Slide right>
                    <div>
                        <ul className="nav justify-content-between mx-0 mb-0 mt-3">
                            {this.props.type === "back" ? (
                                <li className="nav-item float-left ">
                                    <img
                                        src={require("../../../assets/img/png/back-arrow.png")}
                                        className="nav-link pt-3 pb-3"
                                        alt="nav"
                                        onClick={this.props.history.goBack}
                                    />
                                </li>
                            ) : (
                                <li className="nav-item float-left ">
                                    {this.state.openMenu ? (
                                        <img
                                            src={require("../../../assets/img/svg/cancel.svg")}
                                            className="nav-link pt-3 pb-3 cancel_nav"
                                            alt="nav"
                                            onClick={() => this.toggleNav(false)}
                                        />
                                    ) : (
                                        <img
                                            src={require("../../../assets/img/svg/hamburger.svg")}
                                            className="nav-link pt-3 pb-3"
                                            alt="nav"
                                            onClick={() => this.toggleNav(true)}
                                        />
                                    )}
                                </li>
                            )}
                            <li className="nav-item float-right">
                                <img
                                    src={require("../../../assets/img/png/profile-img.png")}
                                    className="nav-link"
                                    alt="nav"
                                />
                            </li>
                        </ul>

                        <div className={"sideBar " + (this.state.openMenu ? "display" : "")}>
                            <div className="title">X-Todo</div>
                            <div className="nav_button">
                                <button
                                    type="submit"
                                    className="btn btn-block btn-danger btn-sm pt-2 pb-2"
                                    onClick={this.logout}
                                >
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
                </Slide>
            </React.Fragment>
        );
    }
}

export default withRouter(NavBar);
