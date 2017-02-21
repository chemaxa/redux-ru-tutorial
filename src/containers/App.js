import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';

class App extends Component {

  render() {
    let { name } = this.props.user;
    let { year, photos } = this.props.page;

    return (<div>
       <h1> Hello {name}! </h1>
       <p>You have {photos.length} in {year}</p>
      </div>)
  }
}

const mapStateToProps = (state)=>{
  return {
    user: state.user,
    page: state.page
  }
}

export default connect(mapStateToProps)(App);