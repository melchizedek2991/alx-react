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

