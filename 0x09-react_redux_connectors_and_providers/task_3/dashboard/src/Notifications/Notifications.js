import React, { PureComponent } from "react";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import closeIcon from "../assets/close-icon.png";
import { StyleSheet, css } from "aphrodite";

class Notifications extends PureComponent {
  constructor(props) {
    super(props);
    // this.markAsRead = this.markAsRead.bind(this);
  }

  // shouldComponentUpdate(nextProps) {
  //   return (
  //     nextProps.listNotifications.length >
  //       this.props.listNotifications.length ||
  //     nextProps.displayDrawer !== this.props.displayDrawer

