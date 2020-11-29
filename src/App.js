import React from 'react';
import './App.css';
import logo from './assets/logo.png'
//uc1
/*
class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello World BridgeLabz</h1>
      </div>
    );
  }
}
*/
//uc2 and uc3 and Uc4
class App extends React.Component{
  url="http://www.rgmechanics.com/"
  constructor(){
    super()
    this.state={
        userName:''
    }
  }
  onClick=($event)=>{
    console.log("save button clicked",$event);
    window.open(this.url,"_blank");
  }
  onNameChange=(event)=>{
    console.log("value is ",event.target.value);
    this.setState({userName:event.target.value})
  }
  render(){
    return(
      <div>
      <div>
        <h1>Hello {this.state.userName} From rg Mechanics</h1>
        <img src={logo} onClick={this.onClick}
        alt="The Normal Logo"></img>
      </div>
      <div className="text-box">
        <input onChange={this.onNameChange}></input>
      </div>
      </div>
    );
  }
}
export default App;
