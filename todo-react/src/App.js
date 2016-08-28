
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
    }

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

    updateTasks(task_id){
      if(task_id){
        this.deleteTask(task_id);
      }else{
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
      // end of else
      }
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
        <Tasks data={this.state.tasks} updateTasks={this.updateTasks.bind(this)} />
        <NewTask />

      </div>
    );
  }
}

export default App;
