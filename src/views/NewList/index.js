import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import "./style.css";
import { withRouter } from "react-router-dom";
import NavBar from "../../components/Layouts/Navbar";

class NewList extends React.Component {
    constructor() {
        super();
        this.state = {
            formError: "",
            listName: ""
        };
    }
    handleChange = e => {
        this.setState({ listName: e.target.value });
    };
    submit = e => {
        e.preventDefault();
        this.props.createList(this.state.listName);
        setTimeout(() => this.props.history.push("/"), 3000);
    };

    render() {
        return (
            <React.Fragment>
                <Slide right>
                    <NavBar type="back" />
                    <div className="newList">
                        <div className="new-task__header clearfix">
                            <h5 className="new-task__header__title float-left font-weight-bold">Create a New List</h5>
                        </div>
                        <form
                            className={
                                "new-list__body needs-validation " + (this.state.formError ? "was-validated" : "")
                            }
                            noValidate
                            onSubmit={this.submit}
                        >
                            <div className="md-form new-task_input mt-5">
                                <textarea
                                    id="new-task-text"
                                    className="md-textarea form-control"
                                    rows="1"
                                    value={this.state.listName}
                                    onChange={this.handleChange}
                                    required
                                ></textarea>
                                <label htmlFor="new-task-text">Name of List</label>
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

                            <div className="new-list_button">
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

export default withRouter(NewList);
