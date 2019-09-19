import React from "react"
import Greeting from "./components/Greeting"
import AppClock from "./components/AppClock"
import Task from "./components/Task"
import "./style.css"
import NavBar from "../../components/Layouts/Navbar";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
        constructor(props) {
                super(props);
        }
        
        openTask = () => {
                setTimeout(() => this.props.history.push('/task'), 1000);
        }
        
        render() {
                return (
                        <React.Fragment>
                                <NavBar/>
                                <div className="home mb-5">
                                        <Greeting/>
                                        <AppClock/>
                                        <div className="text-custom-primary pt-2 mb-5">
                                                <h5 className="font-weight-normal float-left mt-1">Task Lists</h5>
                                                <button type="button" className="btn btn-sm btn-danger float-right"
                                                        id="btnAddTask"><i className="fas fa-plus"></i></button>
                                        </div>
                                        <div className="tasks-slider">
                                                <Task onClick={this.openTask} tasks={this.props.tasks} markComplete={this.props.markComplete}/>
                                                <Task tasks={this.props.tasks} markComplete={this.props.markComplete}
                                                      mode="dark" color="blue"/>
                                                <Task tasks={this.props.tasks} markComplete={this.props.markComplete}
                                                      mode="dark" color="red"/>
                                        </div>
                                </div>
                        </React.Fragment>
                )
        }
}

export default withRouter(Home)
