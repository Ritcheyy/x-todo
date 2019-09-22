import React from "react"
import TaskView from "../../../../TaskView"

class FullScreenModal extends React.Component {
        constructor(props) {
                super(props);
                
                this.state = {
                        position: {},
                        size: {},
                }
        }
        
        openFsm = (event) => {
                console.log(event);
                let $this = event.target.parentElement.parentElement;
                let actualFsm = document.getElementById("actual_fsm");
                this.setState({position: $this.getBoundingClientRect()});
                this.setState({
                        size: {
                                width: window.getComputedStyle($this).width,
                                height: window.getComputedStyle($this).height,
                        }
                });
                
                actualFsm.style.position = "absolute";
                actualFsm.style.top = this.state.position.top + "px";
                actualFsm.style.left = this.state.position.left + "px";
                actualFsm.style.height = this.state.height;
                actualFsm.style.width = this.state.width;
                actualFsm.style.margin = $this.style.margin;
                
                setTimeout(function () {
                        // actualFsm.innerHTML = $this.innerHTML
                        let classes = $this.classList.value.split(' ');
                        classes.forEach(c => {
                                actualFsm.classList.add(c);
                        });
                        actualFsm.classList.add('growing');
                        actualFsm.style.height = '100vh';
                        actualFsm.style.width = '100vw';
                        actualFsm.style.top = '0';
                        actualFsm.style.left = '0';
                        actualFsm.style.margin = '0';
                        
                }, 1);
        
        
                setTimeout(function(){
                        actualFsm.classList.remove('growing');
                        actualFsm.classList.add('full-screen');
                        document.body.classList.add("no-scroll");
                }, 300);
                
        };
        
        componentDidUpdate(prevProps, prevState, snapshot) {
                if (prevProps.eve !== this.props.eve){
                        if (this.props.open){
                                this.openFsm(this.props.eve);
                        }
                }
        }
        
        render() {
                return (
                        <div id="actual_fsm" style={{position: 'absolute'}}>
                                <TaskView tasks={this.props.tasks} markComplete={this.props.markComplete}/>
                        </div>
                )
        }
}

export {FullScreenModal}
