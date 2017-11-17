import React from "react";
import Actions from "../../actions";

class ProfileDropDownMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      showProfileNavbar: false
    }
  }

  menuListener = () => {
    if (this.state.showProfileNavbar) {
      this.setState({showProfileNavbar: false});
    } else {
      this.setState({showProfileNavbar: true});
    }
  };

  clickOutsideListener = (e) => {
    if (e.target != this.refs.profileButton) {
      this.setState({showProfileNavbar: false});
    }
  };

  logoutListener = (e) => {
    e.preventDefault();
    Actions.logout();
  };

  // https://reactjs.org/docs/react-component.html#componentwillmount
  componentWillMount() {
    window.addEventListener("click", this.clickOutsideListener, false);
  }

  // https://reactjs.org/docs/react-component.html#componentwillunmount
  componentWillUnmount() {
    window.removeEventListener("click", this.clickOutsideListener, false);
  }

  renderProfileNavbarButton() {
    return (
      <nav className="profile-navbar" ref="profileNavbar">
        <a href="#">Profile Details</a>
        <a href="#" onClick={this.logoutListener}>Sign out</a>
      </nav>
    );
  }

  render() {
    return (
      <section className="profile-menu">
        <img src={this.props.user.avatar} onClick={this.menuListener} ref="profileButton" className="profile-button avatar-medium"/>
        {
          this.state.showProfileNavbar ? this.renderProfileNavbarButton() : null
        }
      </section>
    );
  }
}

export default ProfileDropDownMenu;
