import React from "react";

class ProfileDropDownMenu extends React.Component {
  renderProfileNavbarButton() {
    return (
      <nav className="profile-navbar" ref="profileNavbar">
        <a href="#">Profile Details</a>
        <a href="#">Sign out</a>
      </nav>
    );
  }

  render() {
    return (
      <section className="profile-menu">
        <img src="/img/user.png" className="profile-button avatar-medium"/>
        {this.renderProfileNavbarButton()}
      </section>
    );
  }
}

export default ProfileDropDownMenu;
