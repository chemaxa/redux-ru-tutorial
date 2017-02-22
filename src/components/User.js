import React, { PropTypes, Component } from 'react';

export default class User extends Component {
  static PropTypes={
    name: PropTypes.string.isRequired
  }
  render(){
    const { name } = this.props.user;
    return(
      <div>
        <p>Hello {name}</p>
      </div>
    )
  }
}