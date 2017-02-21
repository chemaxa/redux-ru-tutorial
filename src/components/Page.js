import React, { PropTypes, Component } from 'react';

export default class User extends Component {
  static PropTypes={
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired
  }
  render(){
    console.log(this.props);
    const { year, photos } = this.props.page;
    return(
      <div>
        <p>You have {photos.length} in {year} </p>
      </div>
    )
  }
}