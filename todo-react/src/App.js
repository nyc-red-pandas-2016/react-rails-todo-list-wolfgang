
import React, { Component } from 'react';
import logo from './logo.svg';
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
        <Tasks data={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
