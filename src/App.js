import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "./global.css"
import Home from "./views/Home"
import TaskView from "./views/TaskView"
import NewTask from "./views/NewTask"
import getRandomColor from "./utils/colors"

class App extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        taskList: [
                                {
                                        id: 1,
                                        title: 'Urgent',
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
                                                },{
                                                        id: 4,
                                                        title: 'Read Bible',
                                                        completed: false,
                                                },
                                        ],
                                        color: getRandomColor()
                                }, {
                                        id: 2,
                                        title: 'Today',
                                        tasks: [
                                                {
                                                        id: 1,
                                                        title: 'Read JS',
                                                        completed: false,
                                                }, {
                                                        id: 2,
                                                        title: 'Watch GOT',
                                                        completed: true,
                                                }, {
                                                        id: 3,
                                                        title: 'Goto Party',
                                                        completed: false,
                                                }
                                        ],
                                        color: getRandomColor()
                                }, {
                                        id: 3,
                                        title: 'Later',
                                        tasks: [
                                                {
                                                        id: 1,
                                                        title: 'See my Guy',
                                                        completed: false,
                                                }, {
                                                        id: 2,
                                                        title: 'Call Dad',
                                                        completed: false,
                                                }, {
                                                        id: 3,
                                                        title: 'Sleep',
                                                        completed: false,
                                                }
                                        ],
                                        color: getRandomColor()
                                }, {
                                        id: 4,
                                        title: 'Budget',
                                        tasks: [
                                                {
                                                        id: 1,
                                                        title: 'Go Cool Stuff',
                                                        completed: true,
                                                }, {
                                                        id: 2,
                                                        title: 'Prepare for Church',
                                                        completed: true,
                                                }, {
                                                        id: 3,
                                                        title: 'Write Clean Codes Write Clean Codes',
                                                        completed: true,
                                                }
                                        ],
                                        color: getRandomColor()
                                },
                        ],
                }
        }
        
        markComplete = (ids) => {
                this.setState({
                        taskList: this.state.taskList.map(list => {
                                if (list.id === ids.listId) {
                                        list.tasks.map(task => {
                                                if (task.id === ids.taskId){
                                                        task.completed = !task.completed
                                                }
                                                return task
                                        })
                                }
                                return list
                        })
                })
        };
        
        createTask = (task) => {
                this.setState({
                        taskList: this.state.taskList.map(list => {
                                if (list.id === parseInt(task.listId)) {
                                        let newId = list.tasks.length + 1;
                                        list.tasks.push({
                                                id: newId,
                                                title: task.title,
                                                completed: false,
                                        })
                                }
                                return list
                        })
                })
        };
        
        createList = (title) => {
                let newList = {
                        id: this.state.taskList.length + 1,
                        title,
                        tasks: [],
                        color: getRandomColor()
                }
                this.setState({
                        taskList: this.state.taskList.push(newList)
                })
                console.log(this.state.taskList);
        };
        
        render() {
                return (
                        <Router>
                                <div className="App">
                                        <Switch>
                                                <Route exact path="/" render={props => (
                                                        <Home taskList={this.state.taskList} markComplete={this.markComplete} createList={this.createList}/>
                                                )}/>
                
                                                <Route path="/task/new/:id" render={props => (
                                                        <NewTask listId={props.match.params.id} createTask={ this.createTask }/>
                                                )}/>
                                                
                                                <Route strict exact path="/task/:id" render={props => (
                                                        <TaskView list={this.state.taskList.find(list => list.id.toString() === props.match.params.id)} markComplete={this.markComplete}/>
                                                )}/>
                                                
                                                <Route render={() => (
                                                        <div className="text-center">
                                                                <h4>404!</h4>
                                                        </div>
                                                )}/>
                                        </Switch>
                                </div>
                        </Router>
                );
        }
}

export default App;
