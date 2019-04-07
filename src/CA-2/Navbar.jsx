import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-secondary">
        <span className="navbar-brand mb-0 h1" style={{ fontFamily: "Times" }}>
          Song Book
        </span>
      </nav>
    );
  }
}

export default Navbar;
