import React, { Component } from 'react';
import { render } from 'react-dom';


//props.data in functional components
function A1(props)
{
  return <h2>functional component||props.data:{props.data}</h2>
}

//this.props.data in class components
class A2 extends React.Component{
  render()
  {
    return<h2>class component||this.props.data:{this.props.data}</h2>
  }
}


//children component in Class component
class A extends Component {
  render(){
    return (<h2>Class Children|this.props.children: {this.props.children}</h2>)
  }
  }

//children attribute in functional component
function B(props)
{
  return(<h2>Functional Children|props.children:{props.children}</h2>)
}
  
//conditional rendering
function C(props){
if (props.TnF == true){
            return <h2>This feature is active</h2>
        }
        else{
            return <h2>This feature is not active</h2>
        }

}
//same function diff paramenters

function D(props)
{
  return <h2>{props.data}</h2>
}

//all coponents placed inside one component , that component gets rendered directly in the render method <main tag> <component1 /> <component2 /> <componentN /></main tag> 

var element=
<span>
<hr/>
//data from class and functional component
<A1 data="Sample data" />
<A2 data="Sample data"></A2>
<hr />
//Children of Functional and class Components
<A>Sample Data</A>
<B>Sample Data</B>
<hr/>
//Same function multiple parameters
<D data="A" /><D data="B" /><D data="C" />
<hr/>
//Conditional Rendering
<C TnF={false} />
</span>


render(element, document.getElementById('root'));
