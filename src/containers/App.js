import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../components/Page'
import User from '../components/User'

class App extends Component {

  render() {
    let { user,page } = this.props;

    return (<div>
      <User user={user} />
      <Page page={page} />
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    user: state.user,
    page: state.page
  }
}

export default connect(mapStateToProps)(App);