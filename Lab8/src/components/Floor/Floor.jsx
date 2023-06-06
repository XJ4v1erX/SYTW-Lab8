import React from "react";
import PropTypes from "prop-types";
import styles from "./Floor.module.css";

const Floor = ({ type }) => {

  return <div className={`${styles.floor} ${styles[`floor--${type}`]}`} />

};

Floor.propTypes = {
  type: PropTypes.oneOf(["cave", "beach", "jungle", "campfire"])
};

export default Floor
