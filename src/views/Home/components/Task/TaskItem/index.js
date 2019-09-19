import React from "react"
import "./style.css"

function TaskItem(props) {
        const {id, title, completed} = props.task;
        
        return (
                <div className="task-item mb-2">
                        <div className={"custom-control custom-checkbox align-content-center " + (completed === true ? 'done' : '')}>
                                <input type="checkbox" className="custom-control-input"
                                       id={id}
                                       defaultChecked={completed}
                                       onChange={props.markComplete.bind(this, id)}/>
                                <label className="custom-control-label" htmlFor={id}>
                                        <p className="strike">
                                                {title}
                                        </p>
                                </label>
                        </div>
                </div>
        )
}


export default TaskItem
