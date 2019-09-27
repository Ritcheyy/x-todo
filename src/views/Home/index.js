import React from "react"
import Greeting from "./components/Greeting"
import AppClock from "./components/AppClock"
import Task from "./components/Task"
import "./style.css"
import NavBar from "../../components/Layouts/Navbar"
import { withRouter } from "react-router-dom"
import Slide from "react-reveal/Slide";


class Home extends React.Component {
        openTask = (id) => {
                setTimeout(() => this.props.history.push(`/task/${id}`), 150);
        }
        
        render() {
                return (
                        <React.Fragment>
                                <Slide left>
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
                                                        {
                                                                this.props.taskList.map(list => {
                                                                        return <Task onClick={() => this.openTask(list.id)} list={list} key={list.id} markComplete={this.props.markComplete}/>
                                                                })
                                                        }
                                                </div>
                                        </div>
                                </Slide>
                        </React.Fragment>
                )
        }
}

export default withRouter(Home)
