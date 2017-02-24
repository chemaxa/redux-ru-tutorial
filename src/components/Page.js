import React, { PropTypes, Component } from 'react';

export default class Page extends Component {
  constructor(){
    super();
    this.onYearBtnClick=this.onYearBtnClick.bind(this);
  }
  static PropTypes={
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired
  }
  onYearBtnClick(e){
    this.props.getPhotos(+e.target.textContent)
  }
  render(){

    const { year, photos, fetching } = this.props.page;
    return(
      <div>
        <nav className='navbar navbar-toggleable-md navbar-light bg-faded'>
          <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <div className='navbar-text mr-auto'>
              { fetching ?  <p>Loading...</p>  :  <p>You have {photos.length} in {year} </p>  }
            </div>
            <ul className='navbar-nav'>
              <li className={year == 2016 ? 'nav-item active' : 'nav-item'}>
                <a className='nav-link' onClick={this.onYearBtnClick}> 2016 </a>
              </li>
              <li className={year == 2015 ? 'nav-item active' : 'nav-item'}>
                <a className='nav-link' onClick={this.onYearBtnClick}> 2015 </a>
              </li>
              <li className={year == 2014 ? 'nav-item active' : 'nav-item'}>
                <a className='nav-link' onClick={this.onYearBtnClick}> 2014 </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}