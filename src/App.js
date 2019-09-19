import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import "./global.css"
import Home from "./views/Home"
import TaskView from "./views/TaskView"
import NewTask from "./views/NewTask"

class App extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        tasks: [
                                {
                                        id: 1,
                                        title: 'Wash Clothes',
                                        completed: true,
                                }, {
                                        id: 2,
                                        title: 'Read Books',
                                        completed: false,
                                }, {
                                        id: 3,
                                        title: 'Write Clean Codes Write Clean Codes',
                                        completed: false,
                                }
                        ]
                }
        }
        
        markComplete = (id) => {
                this.setState({
                        tasks: this.state.tasks.map(task => {
                                if (task.id === id) {
                                        task.completed = !task.completed
                                }
                                return task
                        })
                })
        };
        
        
        render() {
                return (
                        <Router>
                                <div className="App">
                                        
                                        <Route exact path="/" render={props => (
                                                <Home tasks={this.state.tasks} markComplete={this.markComplete}/>
                                        )}/>
                                        
                                        <Route exact path="/task" render={props => (
                                                <TaskView tasks={this.state.tasks} markComplete={this.markComplete}/>
                                        )}/>
                                        
                                        <Route exact path="/task/new" render={props => (
                                                <NewTask/>
                                        )}/>
                                </div>
                        </Router>
                );
        }
}

export default App;
