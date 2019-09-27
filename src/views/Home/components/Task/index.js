import React from "react"
import TaskItem from "./TaskItem"
import "./style.css"

class Task extends React.Component {
        
        render() {
                return (
                        <div className={"waves-effect task " + (this.props.list.color && this.props.list.color !== 'white' ? 'task-dark waves-light ' + this.props.list.color : '')} onClick={this.props.onClick}>
                                <div className="task__header">
                                        <h5 className="task__header__title float-left font-weight-bold">{ this.props.list.title }</h5>
                                        <div className="task_header_btn float-right"><i className="fa fa-plus"></i>
                                        </div>
                                </div>
                                <div className="task__body">
                                        { this.props.list.tasks.slice(0,4).map(task => {
                                                return <TaskItem task={task} key={ task.id }/>
                                        }) }
                                </div>
                        </div>
                )
        }
        
}

export default Task
