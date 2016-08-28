import React,{Component} from "react"
import Task from "./Task"

export default class Tasks extends Component{
  taskDelete(){
      this.props.updateTasks()
  }
  render(){
    let tasks = this.props.data
    return(
        <ul className="tasks">
          {tasks.map((task,index)=>{
            return(
              <li key={index}>
              <Task onDelete={this.taskDelete.bind(this)} data={task}/>
              </li>
            )
          })
          }
        </ul>
      // end of return
    )
    // end of render
  }
}
