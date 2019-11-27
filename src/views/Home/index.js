import React from "react";
import Greeting from "./components/Greeting";
import AppClock from "./components/AppClock";
import Task from "./components/Task";
import "./style.css";
import NavBar from "../../components/Layouts/Navbar";
import { withRouter } from "react-router-dom";
import Slide from "react-reveal/Slide";
import getRandomColor from "../../utils/colors";
import { Link } from "react-router-dom";
import dates from "../../utils/date";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            time: {
                hour: "00",
                minute: "00",
                second: "00"
            },
            day: "",
            date: "",
            month: "",
            interval: "",
            hour: "",
            name: "",
            is_name: false
        };
    }

    openTask = id => {
        setTimeout(() => this.props.history.push(`/task/${id}`), 150);
    };

    doubleDigit = value => {
        if (value < 10) {
            return "0" + value;
        } else {
            return value;
        }
    };

    getTime() {
        const time = new Date();
        this.setState({
            day: dates.daysOfTheWeek[time.getDay()],
            date: time.getDate(),
            month: dates.monthsOfTheYear[time.getMonth()],
            time: {
                hour: this.doubleDigit(time.getHours()),
                minute: this.doubleDigit(time.getMinutes()),
                second: this.doubleDigit(time.getSeconds())
            }
        });
    }
    componentDidMount() {
        this.setState({
            interval: setInterval(() => {
                this.getTime();
            }, 1000)
        });

        const date = new Date();
        this.setState({ hour: date.getHours() });

        if (window.localStorage.getItem("name")) {
            this.setState({
                is_name: true,
                name: window.localStorage.getItem("name")
            });
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    handleSubmit = () => {
        window.localStorage.setItem("name", this.state.name);
        this.props.history.go();
    };
    render() {
        return (
            <React.Fragment>
                {this.state.is_name ? (
                    <Slide left>
                        <NavBar />
                        <div className="home mb-5">
                            <Greeting hour={this.state.hour} name={this.state.name} />
                            <AppClock
                                day={this.state.day}
                                month={this.state.month}
                                date={this.state.date}
                                time={this.state.time}
                            />
                            <div className="text-custom-primary pt-2 mb-5">
                                <h5 className="font-weight-normal float-left mt-1">Task Lists</h5>
                                <Link className="btn btn-sm btn-danger float-right" id="btnAddTask" to="/list/new">
                                    <i className="fas fa-plus"></i>
                                </Link>
                            </div>
                            <div className="tasks-slider">
                                {this.props.taskList.length > 0 ? (
                                    this.props.taskList.map(list => {
                                        return (
                                            <Task
                                                onClick={() => this.openTask(list.id)}
                                                list={list}
                                                key={list.id}
                                                markComplete={this.props.markComplete}
                                            />
                                        );
                                    })
                                ) : (
                                    <div className="no-task">
                                        <p className="no-task-text">
                                            You have not entered any task yet,
                                            <br />{" "}
                                            <b>
                                                <Link to="/list/new">Add a List to begin</Link>
                                            </b>{" "}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Slide>
                ) : (
                    <Slide down>
                        <div className="text-center">
                            <p className="intro-text ">
                                Welcome to <span className={"text-" + getRandomColor()}>X-todo!</span>
                            </p>
                        </div>
                        <div className="center">
                            <input
                                id="new-task-text"
                                className=" form-control"
                                placeholder="Enter your name."
                                required
                                onChange={this.handleChange}
                            />
                            <button className={"btn btn-lg mt-5 text-white black"} onClick={this.handleSubmit}>
                                Continue
                            </button>
                        </div>
                    </Slide>
                )}
            </React.Fragment>
        );
    }
}

export default withRouter(Home);
