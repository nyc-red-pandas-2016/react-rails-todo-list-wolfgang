import React,{Component} from 'react'

export default class NewTask extends Component{
  render(){
    return(
      <div className="new-task-form">
        <form>
          <div><input type="text" name='name' placeholder="name"/></div>
          <div><textarea name='description' placeholder="description"/></div>
          <div><button type="submit">Create New Task</button></div>
        </form>
      </div>
    )
  }
}
