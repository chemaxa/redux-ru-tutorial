import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Forecast from '../components/Forecast';
import CityList from '../components/CityList';
import * as cityListActions from '../actions/cityListActions';

class App extends Component {
  render() {
    let { cityList, forecast } = this.props;
    return (<div>
      <Forecast forecast={forecast} />
      <CityList cityList={cityList} actions = {this.props.cityListActions} />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    cityListActions: bindActionCreators(cityListActions,dispatch)
  }
}
const mapStateToProps = (state)=>{
  return {
    cityList: state.cityList,
    forecast: state.forecast
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);