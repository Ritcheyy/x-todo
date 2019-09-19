import React from "react"
import TaskItem from "./TaskItem"
import "./style.css"

class Task extends React.Component {
        
        render() {
                return (
                        <div className={"waves-effect task " + (this.props.color ? 'task-dark waves-light ' + this.props.color : '')} onClick={this.props.onClick}>
                                <div className="task__header">
                                        <h5 className="task__header__title float-left font-weight-bold">Today</h5>
                                        <div className="task_header_btn float-right"><i className="fa fa-plus"></i>
                                        </div>
                                </div>
                                <div className="task__body">
                                        { this.props.tasks.map(task => {
                                                return <TaskItem task={task} markComplete={this.props.markComplete} key={task.id}/>
                                        }) }
                                        
                                </div>
                        </div>
                )
        }
        
}

export default Task
