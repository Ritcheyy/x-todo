import React from "react";
import Greeting from "./components/Greeting";
import AppClock from "./components/AppClock";
import Task from "./components/Task";
import "./style.css";
import NavBar from "../../components/Layouts/Navbar";
import { withRouter } from "react-router-dom";
import Slide from "react-reveal/Slide";
import getRandomColor from "../../utils/colors";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            time: "00000000",
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

    getTime() {
        const time = new Date();
        const splittedTime = time.toUTCString().split(" ");
        this.setState({
            day: splittedTime[0],
            date: splittedTime[1],
            month: splittedTime[2],
            time: splittedTime[4]
        });
    }
    componentDidMount() {
        this.setState({
            interval: setInterval(() => {
                this.getTime();
            }, 1000)
        });

        const date = new Date();
        this.setState({ hour: date.getUTCHours() });

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
        this.props.history.go()
    };
    render() {
        return (
            <React.Fragment>
                {this.state.is_name ? (
                    <Slide left>
                        <NavBar />
                        <div className="home mb-5">
                            <Greeting hour={this.state.hour} name={this.state.name}/>
                            <AppClock
                                day={this.state.day}
                                month={this.state.month}
                                date={this.state.date}
                                time={this.state.time}
                            />
                            <div className="text-custom-primary pt-2 mb-5">
                                <h5 className="font-weight-normal float-left mt-1">Task Lists</h5>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-danger float-right"
                                    id="btnAddTask"
                                    onClick={() => this.props.createList("New List")}
                                >
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                            <div className="tasks-slider">
                                {this.props.taskList.map(list => {
                                    return (
                                        <Task
                                            onClick={() => this.openTask(list.id)}
                                            list={list}
                                            key={list.id}
                                            markComplete={this.props.markComplete}
                                        />
                                    );
                                })}
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
