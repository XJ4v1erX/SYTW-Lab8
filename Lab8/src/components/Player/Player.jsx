import React from 'react'
import PropTypes from "prop-types"
import styles from "./Player.module.css"

const Player = ({ skin, direction }) => {
  return <div className={`${styles.player} ${styles[`player--${skin}--${direction}`]}`} />
}

Player.propTypes = {
  skin: PropTypes.oneOf(['Chinese', 'Black', 'White']),
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right'])
}

export default Player
