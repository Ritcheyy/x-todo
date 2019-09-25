import React from "react"
import TaskItem from "./components/TaskItem"
import "./style.css"
import NavBar from "../../components/Layouts/Navbar"
import {Link, withRouter} from "react-router-dom"
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"

class TaskView extends React.Component {
        constructor(props) {
                super(props);
                
                this.state = {
                        color: ''
                }
        }
        
        componentDidMount() {
                const {color} = this.props.location.state;
                this.setState({color: color});
        }
        
        render() {
                console.log(this.state.color);
                return (
                        <React.Fragment>
                                <Fade>
                                        <NavBar type="back" url="/"/>
                                </Fade>
                                
                                <Zoom>
                                        <div className={"task-view " + (this.state.color ? 'task-view-dark ' + this.state.color : '')}>
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
                                </Zoom>
                        </React.Fragment>
                )
        }
        
}

export default withRouter(TaskView)
