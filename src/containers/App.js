import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from '../components/Page';
import User from '../components/User';
import * as pageActions from '../actions/pageActions';

class App extends Component {

  render() {
    let { user,page } = this.props;
    let { setYear } = this.props.pageActions;

    return (<div>
      <User user={user} />
      <Page page={page} setYear={setYear}/>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    pageActions: bindActionCreators(pageActions,dispatch)
  }
}
const mapStateToProps = (state)=>{
  return {
    user: state.user,
    page: state.page
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);