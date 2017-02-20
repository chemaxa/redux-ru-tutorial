import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';

class App extends Component {

  render() {
    let { name, surname, age } = this.props.user;

    return ( <h1> Hello {name} {surname}, with {age} old! </h1>)
  }
}

const mapStateToPros = (state)=>{
  return {
    user: state
  }
}

export default connect(mapStateToPros)(App);