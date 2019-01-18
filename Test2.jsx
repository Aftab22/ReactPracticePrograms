import React, { Component } from 'react';
import { render } from 'react-dom';



//==================STATE=====================
//only class components can have state
//functional components are stateless



//Class with initial state data


//The constructor() method is called before a React Component is mounted and is used to set up the initial state of the component. It is important to call super(props) at the beginning of the constructor() method or else the this.props attribute may not work correctly. The first argument to the constructor() method represents the properties that are passed into the component.

class E extends React.Component{
  constructor(props)
  {
  super(props)
  //initial state
  this.state={data:"Sample Data"}
  }
  render()
  {
    return(<h2>Class State data: {this.state.data}</h2>)
  }
}



//updating the state using this.setState

class F extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={data:"old data"}
  }
  componentDidMount()
  {
    this.setState({data:"new data"})
  }
  render()
  {
  return(<h2>Updated state data:{this.state.data}</h2>)
  }
}


let element=
<div>
<hr/>
//Setting inital state
<E/>
<hr/>
//Updating state using this.setState after componentDidMount
<F/>
<hr/>
</div>
render(element, document.getElementById('root'));
