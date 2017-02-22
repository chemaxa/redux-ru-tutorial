import React, { PropTypes, Component } from 'react';

export default class User extends Component {
  constructor(){
    super();
    this.onYearBtnClick=this.onYearBtnClick.bind(this);
  }
  static PropTypes={
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired
  }
  onYearBtnClick(e){
    this.props.setYear(+e.target.textContent)
  }
  render(){
    const { year, photos } = this.props.page;
    return(
      <div>
        <button onClick={this.onYearBtnClick}> 2016 </button> 
        <button onClick={this.onYearBtnClick}> 2015 </button>
        <button onClick={this.onYearBtnClick}> 2014 </button>
        <p>You have {photos.length} in {year} </p>
      </div>
    )
  }
}