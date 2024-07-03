import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const NotificationItem = React.memo(function NotificationItem({
  type,
  value,
  html,
  markAsRead,
  id,
}) {
  let listItem;

  let typeStyle = css(type === "urgent" ? styles.urgent : styles.default);

  if (value) {
    if (type === "noNotifications") {
      listItem = (
        <li
          className={css(styles.noNotifications)}
          data-notification-type={type}
        >
          {value}
        </li>
      );
    } else {
      listItem = (
        <li
          className={typeStyle}
          data-notification-type={type}
          onClick={() => markAsRead(id)}
        >
          {value}
        </li>
      );
    }
  } else {
    listItem = (
      <li
        className={typeStyle}

