import React, { Component } from 'react' ;
import { connect } from 'react-redux'

class Header extends Component {

  renderContent() {
    switch(this.props.auth){
      case null:
        return;
      case false: 
        return  <a href="/auth/google">Login With Google</a>;
      default: 
      return <a href="/api/logout">Logout</a>;
    }
  }
  render() {

    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            Emaily
          </a>
                  <ul className="right">
          <li>
            {this.renderContent()}
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({auth}){
  return { auth };
}

export default connect(mapStateToProps)(Header);


