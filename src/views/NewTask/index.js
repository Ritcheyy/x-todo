import React from "react"
import NavBar from "../../components/Layouts/Navbar"
import "./style.css"

class NewTask extends React.Component {
        
        render() {
                return (
                        <React.Fragment>
                                <NavBar type="back" url="/task"/>
                                <div className="new-task">
                                        <div className="new-task__header clearfix">
                                                <h4 className="new-task__header__title float-left font-weight-bold">New
                                                        Task</h4>
                                        </div>
                                        
                                        <div className="new-task__body">
                                                <div className="md-form new-task_input mt-5">
                                                                <textarea id="new-task-text" className="md-textarea form-control" rows="3"></textarea>
                                                        <label htmlFor="new-task-text">What are you planning?</label>
                                                </div>
                                                
                                                <div className="new-task_time">
                                                        <i className="far fa-bell fa-lg mr-4"></i> <span>Oct 06, 14:00</span>
                                                </div>
                                                
                                                <div className="new-task_button">
                                                        <button type="button" className="btn btn-block btn-danger btn-sm pt-2 pb-2">Create</button>
                                                </div>
                                        </div>
                                </div>
                        </React.Fragment>
                )
        }
        
}

export default NewTask;
