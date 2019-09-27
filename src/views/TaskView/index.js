import React from "react"
import TaskItem from "./components/TaskItem"
import "./style.css"
import NavBar from "../../components/Layouts/Navbar"
import {Link, withRouter} from "react-router-dom"
import Slide from "react-reveal/Slide";

class TaskView extends React.Component {
        getTaskID =(id) => {
                let ids = {
                        listId: this.props.list.id,
                        taskId: id,
                };
                
                this.props.markComplete(ids);
        }
        
        render() {
                return (
                        <React.Fragment>
                                <Slide right>
                                        <NavBar type="back"/>
                                                <div className={"task-view " + (this.props.list.color && this.props.list.color !== 'white' ? 'task-view-dark ' + this.props.list.color : '')}>
                                                        <div className="task-view__header clearfix">
                                                                <h4 className="task-view__header__title float-left font-weight-bold">{ this.props.list.title }</h4>
                                                                
                                                                <Link to="/task/new">
                                                                        <div className="task-view_header_btn float-right">
                                                                                <i className="fa fa-plus"></i>
                                                                        </div>
                                                                </Link>
                                                        </div>
                                                        <div className="task-view__body">
                                                                {this.props.list.tasks.map(task => {
                                                                        return <TaskItem task={task} getTaskID={this.getTaskID} key={task.id}/>
                                                                })}
                                                        </div>
                                                </div>
                                </Slide>
                        </React.Fragment>
                )
        }
        
}

export default withRouter(TaskView)
