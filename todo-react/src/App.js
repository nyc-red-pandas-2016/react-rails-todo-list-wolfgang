
import React, { Component } from 'react';
import logo from './logo.svg';
import Axios from "axios";
import task from './components/Task';
import './App.css';

class App extends Component {
  constructor(){
    super();
      this.state = {
        tasks: []
      }
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
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul>
         {this.state.tasks.map((task,index)=>{
          return(
            <li key={index}>
                {task.name}
            </li>
            )
         })}
         </ul>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
