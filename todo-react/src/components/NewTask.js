import React,{Component} from 'react'

export default class NewTask extends Component{
  formSubmit(e){
    e.preventDefault();
    let nameInput = this.refs.name.value;
    let descriptionInput = this.refs.description.value;
    let newTask = {
      name:nameInput,
      description:descriptionInput
    }
    this.props.newTask(newTask);

  }
  render(){
    return(
      <div className="new-task-form">
        <form id="newTaskForm" onSubmit={this.formSubmit.bind(this)}>
          <div className="text-field"><input ref="name" type="text" name='name' placeholder="Name"/></div>
          <div className="text-field"><textarea ref="description" name='description' rows="5" placeholder="Description"/></div>
          <div className="text-field"><button type="submit">Create New Task</button></div>
        </form>
      </div>
    )
  }
}
