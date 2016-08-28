
import React, { Component } from 'react';
import Axios from "axios";
import Tasks from './components/Tasks';
import './App.css';

class App extends Component {
  constructor(){
    super();
      this.state = {
        tasks: []
      }
    }
    updateTasks(){
      this.forceUpdate()
    }
    componentDidMount(){
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
    }
    render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>To-Do List</h2>
        </div>
        <Tasks data={this.state.tasks} updateTasks={this.updateTasks.bind(this)} />
      </div>
    );
  }
}

export default App;
