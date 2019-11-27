import React from "react";
import TaskItem from "./components/TaskItem";
import "./style.css";
import NavBar from "../../components/Layouts/Navbar";
import { Link, withRouter } from "react-router-dom";
import Slide from "react-reveal/Slide";

class TaskView extends React.Component {
    getTaskID = id => {
        let ids = {
            listId: this.props.list.id,
            taskId: id
        };

        this.props.markComplete(ids);
    };

    deleteList = id => {
        this.props.deleteList(id);
        this.props.history.push('/')
    };

    render() {
        return (
            <React.Fragment>
                <Slide right>
                    <NavBar type="back" />
                    <div
                        className={
                            "task-view " +
                            (this.props.list.color && this.props.list.color !== "white"
                                ? "task-view-dark " + this.props.list.color
                                : "")
                        }
                    >
                        <div className="task-view__header clearfix">
                            <h5 className="task-view__header__title float-left font-weight-bold">
                                {this.props.list.title}
                            </h5>
                            <div className="float-right d-flex">
                                <Link to={"/task/new/" + this.props.list.id.toString()}>
                                    <div className="task-view_header_btn">
                                        <i className="fa fa-plus"></i>
                                    </div>
                                </Link>

                                <div className="trash task-view_header_btn" onClick={() => this.deleteList(this.props.match.params.id)}>
                                    <i className="far fa-trash-alt"></i>
                                </div>
                            </div>
                        </div>
                        <div className="task-view__body">
                            {this.props.list.tasks
                                .sort((a, b) => b.id - a.id)
                                .map(task => {
                                    return <TaskItem task={task} getTaskID={this.getTaskID} key={task.id} />;
                                })}
                        </div>
                    </div>
                </Slide>
            </React.Fragment>
        );
    }
}

export default withRouter(TaskView);
