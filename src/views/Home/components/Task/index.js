import React from "react"
import TaskItem from "./TaskItem"
import "./style.css"
import "./animation-style.css"
// import {openFSM, closeFSM} from "./fullScreenContent"
import {FullScreenModal} from "./FullScreenModal";

class Task extends React.Component {
        constructor(props){
                super(props);
                this.state = {
                        openModal: false,
                        eve: {}
                }
        }
        
        open = (e) => {
                e.persist();
                this.setState({openModal: true});
                this.setState({eve: e});
        };
        
        render() {
                return (
                        <div className={"fsm task" + (this.props.color ? ' task-dark ' + this.props.color : '')}>
                                <div className="task__header" onClick={ (e) => this.open(e) }>
                                        <h5 className="task__header__title float-left font-weight-bold">Today</h5>
                                        <div className="task_header_btn float-right"><i className="fa fa-plus"></i>
                                        </div>
                                </div>
                                <div className="task__body">
                                        { this.props.tasks.map(task => {
                                                return <TaskItem task={task} markComplete={this.props.markComplete} key={task.id}/>
                                        }) }
                                </div>
                                <FullScreenModal open={this.state.openModal} eve={this.state.eve} tasks={this.props.tasks} markComplete={this.props.markComplete} />
                        </div>
                )
        }
        
}

export default Task
