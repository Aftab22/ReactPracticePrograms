import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';

//============Events===============
//onclick
//previous state gets changed to new state

class H extends React.Component{
    constructor(props){
        super(props)
        this.state = {message:"Old State"}
         this.clicker = this.clicker.bind(this)
    }


clicker(){
       this.setState(
          state=> 
          {
        return {message: "New State" }
      }
      )
    }


    render(){
     
        return(
        <div>
        <button onClick = {this.clicker}>Click to Change state</button>
        <p>{this.state.message}</p>
        </div>
        )
    }
}

render(
  <H/>,
  document.getElementById("root")
)