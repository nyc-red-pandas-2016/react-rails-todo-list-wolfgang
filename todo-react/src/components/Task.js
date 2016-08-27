import React,{Component} from "react";


export default class Task extends Component{
  render(){
    let {name,description,created_at,updated_at} = this.props.data
    return(
      <div className="task-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <sub>created:{created_at} Updated:{updated_at}</sub>
      </div>

    // end of
       )

  }
}
