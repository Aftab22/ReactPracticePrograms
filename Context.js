import React  from 'react'
import {render} from 'react-dom'

const myContext = React.createContext();

class App extends React.Component {
  state = {
    message: 'Hello World!'
  }
  render() {
    return (
      <myContext.Provider value={this.state.message}>
        <ChildComponent/>
      </myContext.Provider>
      )
  }
}

class ChildComponent extends React.Component{
  render(){
    return (
       <GrandChild/>
    )
  }
}

class GrandChild extends React.Component{

  render(){
    return (
      <div>
      <myContext.Consumer>
      {(data) => <div>Data in context: {data}</div>}
      </myContext.Consumer>
      </div>
    )
  }
}



render(<App />, document.getElementById('root'))
