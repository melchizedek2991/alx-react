import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();

    const { email, password } = this.state;

    this.props.logIn(email, password);
  }

  handleChangeEmail(event) {

