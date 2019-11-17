import React from "react";
import NavBar from "../../components/Layouts/Navbar";
import "./style.css";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { withRouter } from "react-router-dom";

class NewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "",
            interval: "",
            taskTitle: "",
            formError: false
        };
    }

    getTime = () => {
        let time = new Date();
        let timeArray = time.toUTCString().split(" ");
        let realTime = timeArray[2] + " " + timeArray[1] + ", " + timeArray[4];

        this.setState({
            time: realTime
        });
    };

    handleChange = e => {
        this.setState({
            taskTitle: e.target.value
        });
    };

    handleCreate = e => {
        e.preventDefault();
        if (this.state.taskTitle) {
            let task = {
                listId: this.props.listId,
                title: this.state.taskTitle
            };
            this.props.createTask(task);
            this.props.history.push(`/task/${this.props.listId}`);
        } else {
            this.setState({
                formError: true
            });
        }
    };

    componentDidMount() {
        this.setState({
            interval: setInterval(() => {
                this.getTime();
            }, 1000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <React.Fragment>
                <Slide right>
                    <NavBar type="back" />

                    <div className="new-task">
                        <div className="new-task__header clearfix">
                            <h5 className="new-task__header__title float-left font-weight-bold">New Task</h5>
                        </div>

                        <form
                            className={
                                "new-task__body needs-validation " + (this.state.formError ? "was-validated" : "")
                            }
                            noValidate
                            onSubmit={this.handleCreate}
                        >
                            <div className="md-form new-task_input mt-5">
                                <textarea
                                    id="new-task-text"
                                    className="md-textarea form-control"
                                    rows="3"
                                    value={this.state.taskTitle}
                                    onChange={this.handleChange}
                                    required
                                ></textarea>
                                <label htmlFor="new-task-text">What are you planning?</label>
                                <Fade>
                                    <div className="invalid-feedback">
                                        Think of something you need to do{" "}
                                        <span role="img" aria-label="tongue">
                                            🤪
                                        </span>
                                        ...
                                    </div>
                                </Fade>
                            </div>

                            <div className="new-task_time">
                                <i className="far fa-bell fa-lg mr-4"></i> <span>{this.state.time}</span>
                            </div>

                            <div className="new-task_button">
                                <button type="submit" className="btn btn-block btn-danger btn-sm pt-2 pb-2">
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </Slide>
            </React.Fragment>
        );
    }
}

export default withRouter(NewTask);
