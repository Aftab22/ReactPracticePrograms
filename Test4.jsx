import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';

//==========Event Handling========
//onclick
//keeping previous state
//counter

class I extends React.Component{
    constructor(props){
        super(props)
        this.state = {count:1}
        //binding is necessary to make `this` point to the correct object
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
      //increments the count of the state
      this.setState((prevState,props) => {
        return {count: prevState.count + 1}
      })
    }
    render(){
        //renders a button that displays the state count
        return <button onClick = {this.clickHandler}>{this.state.count}</button>
    }
}

render(
  <I/>,
  document.getElementById("root")
)