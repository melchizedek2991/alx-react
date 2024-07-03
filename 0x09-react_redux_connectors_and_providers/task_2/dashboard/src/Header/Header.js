import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/uiActionCreators";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";
import holberton_logo from "../assets/holberton_logo.jpg";

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, logout } = this.props;

    return (
      <div className={css(styles.header)}>
        <img src={holberton_logo} className={css(styles.headerImg)} />
        <h1>School dashboard</h1>

        {user && (
          <p id="logoutSection" className={css(styles.logoutSection)}>
            Welcome <b>{`${user.email} `}</b>
            <span onClick={logout} className={css(styles.logoutSectionSpan)}>
              (logout)
            </span>
          </p>
        )}
      </div>
    );
  }
}

const cssVars = {
  mainColor: "#e01d3f",
};

