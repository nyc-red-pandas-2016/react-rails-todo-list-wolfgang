
import React, { Component } from 'react';
import Axios from "axios";
import Tasks from './components/Tasks';
import NewTask from './components/NewTask';
import './App.css';

class App extends Component {
  constructor(){
    super();
      this.state = {
        tasks: []
      }
      this.updateTasks = this.updateTasks.bind(this)
      this.deleteTask = this.deleteTask.bind(this)
      this.createTask = this.createTask.bind(this)
    }
    // delete a task
    deleteTask(task_id){
      let url=`http://localhost:3000/tasks/${task_id}`
      Axios.delete(url).then((response)=>{
        this.setState({
          tasks:response.data
        })
      }).catch((errors)=>{
        console.log(errors)
      })
    }

    createTask(newTask){
        Axios({
          method:'post',
          url:'http://localhost:3000/tasks',
          data:newTask
        }).then((response)=>{
            if(Object.keys(response.data).join() !== "errors"){
              document.getElementById("newTaskForm").reset()
              this.setState({
                tasks:response.data
              })
            }else{
                alert(response.data.errors)
            }
          // end of task
        }).catch((errors)=>{
          console.log(errors)
          // end of catch
        })
    }
    // get all of the tasks
    updateTasks(){
        Axios.get("http://localhost:3000/tasks/show")
        .then((response)=>{
            this.setState({
              tasks:response.data
            })
          // end of then
        })
        .catch((errors)=>{
          console.log(errors  )
          // end of catch
        })

      // end of updateTasks
    }

    componentDidMount(){
      this.updateTasks()
    }


    render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>To-Do List</h2>
        </div>
        <Tasks data={this.state.tasks} updateTasks={this.deleteTask.bind(this)} />
        <NewTask newTask={this.createTask.bind(this)} />

      </div>
    );
  }
}

export default App;
