import React from "react"
import Greeting from "./components/Greeting"
import AppClock from "./components/AppClock"
import Task from "./components/Task"
import "./style.css"
import NavBar from "../../components/Layouts/Navbar"
import { withRouter } from "react-router-dom"
import Fade from "react-reveal/Fade"
import getRandomColor from "../../utils/colors"
import TaskItem from "./components/Task/TaskItem";


class Home extends React.Component {
        constructor(props) {
                super(props);
        }
        
        openTask = (color) => {
                if (color === 'white') color = '';
                setTimeout(() => this.props.history.push('/task', {
                        color
                }), 150);
        }
        
        render() {
                console.log(getRandomColor());
                return (
                        <React.Fragment>
                                <Fade big>
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
                                                                [1,2,3].map(task => {
                                                                        let color = getRandomColor()
                                                                        return <Task onClick={() => this.openTask(color)} tasks={this.props.tasks} markComplete={this.props.markComplete} color={color}/>
                                                                })
                                                        
                                                        }
                                                        <Task onClick={() => this.openTask('white')} tasks={this.props.tasks} markComplete={this.props.markComplete}/>
                                                        <Task onClick={() => this.openTask('blue')} tasks={this.props.tasks} markComplete={this.props.markComplete} color="blue"/>
                                                        <Task onClick={() => this.openTask('red')} tasks={this.props.tasks} markComplete={this.props.markComplete} color="red"/>
                                                </div>
                                        </div>
                                </Fade>
                        </React.Fragment>
                )
        }
}

export default withRouter(Home)
