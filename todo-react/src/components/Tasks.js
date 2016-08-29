import React,{Component} from "react"
import Task from "./Task"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Tasks extends Component{
  taskDelete(task_id){
      this.props.updateTasks(task_id)
  }
  taskComplete(task_id){
    this.props.taskComplete(task_id)
  }
  render(){
    let tasks = this.props.data
    return(
        // <ul className="tasks">
        <ReactCSSTransitionGroup component="ul" className="tasks" transitionName="tasks" transitionEnterTimeout={300} transitionLeaveTimeout={200}>
          {tasks.map((task,index)=>{
            return(
                <li  key={index}>
                  <Task onDelete={this.taskDelete.bind(this)} onComplete={this.taskComplete.bind(this)} data={task}/>
                </li>
            )
          })
          }
          </ReactCSSTransitionGroup>
        // </ul>
      // end of return
    )
    // end of render
  }
}
