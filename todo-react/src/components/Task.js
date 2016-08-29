import React,{Component} from "react";
// import Axios from 'axios';

export default class Task extends Component{
  taskDelete(e){
    e.preventDefault()
    let task_id = this.refs.taskDelete.id
    this.props.onDelete(task_id)
  }

  taskComplete(e){
    e.preventDefault()
    let task_id = this.refs.taskcomplete.id
    this.props.onComplete(task_id)
  }

  render(){
    let {name,description,created_at,updated_at,id,complete} = this.props.data
    return(
      <div className="task-info">
          <div className="col-group">
            <div className="col-1">
              <h3>{name}</h3>
              <p>{description}</p>
              <p></p>
              <sub>Created: {created_at}   Updated: {updated_at}</sub>
            </div>
            <div className="col-2">
              <a id={id} ref="taskDelete" className="delete" href={`/tasks/delete/${id}`} onClick={this.taskDelete.bind(this)}>Delete</a>
              <a id={id} ref="taskcomplete" className={complete === true ? "complete completed" : "complete"} href={`/tasks/${id}`} onClick={this.taskComplete.bind(this)}>Complete</a>
            </div>
            </div>

      </div>

    // end of
       )

  }
}
