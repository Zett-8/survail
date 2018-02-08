import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payment from './Payment';

class Header extends React.Component{
  renderContent(){
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href='/auth/google'>Login with google</a></li>
        );
      default:
        return [
          <li key='1'><Payment /></li>,
          <li style={{ margin: '0 10px'}} key='2'>Credits: {this.props.auth.credits}</li>,
          <li key='3'><a href='/api/logout'>log out</a></li>
        ]
    }
  }

  render(){
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth? '/surveys' : '/'} style={{ marginLeft: '20px'}} className='left brand-logo'>Survail</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }){
  return { auth }
}

export default connect(mapStateToProps)(Header);