import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./global.css";
import Home from "./views/Home";
import TaskView from "./views/TaskView";
import NewTask from "./views/NewTask";
import getRandomColor from "./utils/colors";
import NewList from "./views/NewList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: []
        };
    }
    componentDidMount() {
        if (window.localStorage.getItem("taskList")) {
            this.setState({ taskList: JSON.parse(window.localStorage.getItem("taskList")) });
        } else {
            window.localStorage.setItem("taskList", JSON.stringify([]));
            this.setState({ taskList: JSON.parse(window.localStorage.getItem("taskList")) });
        }
    }
    markComplete = ids => {
        this.setState({
            taskList: this.state.taskList.map(list => {
                if (list.id === ids.listId) {
                    list.tasks.map(task => {
                        if (task.id === ids.taskId) {
                            task.completed = !task.completed;
                        }
                        return task;
                    });
                }
                return list;
            })
        });
        window.localStorage.setItem("taskList", JSON.stringify(this.state.taskList));
    };

    createTask = task => {
        this.setState({
            taskList: this.state.taskList.map(list => {
                if (list.id === parseInt(task.listId)) {
                    let newId = list.tasks.length + 1;
                    list.tasks.push({
                        id: newId,
                        title: task.title,
                        completed: false
                    });
                }
                return list;
            })
        });
        window.localStorage.setItem("taskList", JSON.stringify(this.state.taskList));
    };

    createList = title => {
        let newList = {
            id: this.state.taskList.length + 1,
            title,
            tasks: [],
            color: getRandomColor(),
            user_id: window.localStorage.getItem("name")
        };
        this.setState({
            taskList: this.state.taskList.push(newList)
        });

        window.localStorage.setItem("taskList", JSON.stringify(this.state.taskList));
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={props => <Home taskList={this.state.taskList} markComplete={this.markComplete} />}
                        />

                        <Route path="/list/new" render={props => <NewList createList={this.createList} />} />

                        <Route
                            path="/task/new/:id"
                            render={props => <NewTask listId={props.match.params.id} createTask={this.createTask} />}
                        />

                        <Route
                            strict
                            exact
                            path="/task/:id"
                            render={props => (
                                <TaskView
                                    list={this.state.taskList.find(
                                        list => list.id.toString() === props.match.params.id
                                    )}
                                    markComplete={this.markComplete}
                                />
                            )}
                        />

                        <Route
                            render={() => (
                                <div className="text-center">
                                    <h4>404!</h4>
                                </div>
                            )}
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
