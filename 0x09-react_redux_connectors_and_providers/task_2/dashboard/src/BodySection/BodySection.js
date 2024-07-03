import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class BodySection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, title } = this.props;
    return (
      <div className={css(styles.bodySection)}>
        <h2 className={css(styles.bodySectionH2)}>{title}</h2>
        {children}
      </div>
    );
  }
}

BodySection.defaultProps = {
  title: "",
};

BodySection.propTypes = {

