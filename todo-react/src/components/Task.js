import React,{Component} from "react";
// import Axios from 'axios';

export default class Task extends Component{
  taskDelete(e){
    e.preventDefault()
    let task_id = this.refs.taskDelete.id
    this.props.onDelete(task_id)
  }
  render(){
    let {name,description,created_at,updated_at,id} = this.props.data
    return(
      <div className="task-info">
          <div className="col-group">
            <div className="col-1">
              <h3>{name}</h3>
              <p>{description}</p>
              <sub>Created: {created_at}   Updated: {updated_at}</sub>
            </div>
            <div className="col-2">
              <a id={id} ref="taskDelete" className="delete" href={`/tasks/delete/${id}`} onClick={this.taskDelete.bind(this)}>Done</a>
            </div>
            </div>

      </div>

    // end of
       )

  }
}
