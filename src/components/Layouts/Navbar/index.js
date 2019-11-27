import React from "react";
import "./style.css";
import { withRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";

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

    handleChange = e => {
        let formData = new FormData();

        formData.append("picture", this.refs.file.files[0]);

        console.log(formData.get("picture"));
        console.log(this.refs);
        console.log(e.target)
    };
    render() {
        return (
            <React.Fragment>
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
                            <button type="button" data-toggle="modal" data-target="#uploadModal">
                                <img
                                    src={require("../../../assets/img/svg/user-placeholder.svg")}
                                    className="nav-link"
                                    alt="nav"
                                />
                            </button>
                        </li>
                    </ul>
                    <Fade>
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
                    </Fade>

                    <div
                        className="modal fade"
                        id="uploadModal"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="uploadModal"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="uploadModalLabel">
                                        Upload Profile Picture
                                    </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <input
                                        type="file"
                                        onChange={this.handleChange}
                                        ref="file"
                                        name="picture"
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                        Done
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(NavBar);
