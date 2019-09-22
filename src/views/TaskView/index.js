import React from "react"
import TaskItem from "./components/TaskItem"
// import "./style.css"
import NavBar from "../../components/Layouts/Navbar";
import {Link} from "react-router-dom";

class TaskView extends React.Component {
        
        render() {
                return (
                        <React.Fragment>
                                <NavBar type="back" url="/"/>
                                <div className={"task-view " + (this.props.color ? 'task-view-dark ' + this.props.color : '')}>
                                        <div className="task-view__header clearfix">
                                                <h4 className="task-view__header__title float-left font-weight-bold">Today</h4>
                                                
                                                <Link to="/task/new">
                                                        <div className="task-view_header_btn float-right"><i
                                                                className="fa fa-plus"></i>
                                                        </div>
                                                </Link>
                                        </div>
                                        <div className="task-view__body">
                                                {this.props.tasks.map(task => {
                                                        return <TaskItem task={task}
                                                                         markComplete={this.props.markComplete}
                                                                         key={task.id}/>
                                                })}
                                        
                                        </div>
                                </div>
                        </React.Fragment>
                )
        }
        
}

export default TaskView
