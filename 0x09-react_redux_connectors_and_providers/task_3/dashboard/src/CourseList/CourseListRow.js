import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const rowStyles = { backgroundColor: "#f5f5f5ab" };
const headerRowStyles = { backgroundColor: "#deb5b545" };

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  let element;

  const tableItemStyle = css(

