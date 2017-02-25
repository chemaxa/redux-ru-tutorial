import React, { PropTypes, Component } from 'react';

export default class Forecast extends Component {
  static PropTypes={
    fetching: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired
  }
  render(){
    const { data, fetching } = this.props.forecast;
    return(
      <div>
          { fetching ?  <p>Loading...</p>  :  <p>Your forecast data {data} </p>  }
      </div>
    )
  }
}