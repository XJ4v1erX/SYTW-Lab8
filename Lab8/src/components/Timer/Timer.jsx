import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styles from "./Timer.module.css"

const Timer = ({ theme, time, won }) => {
  const [timerValue, setTimerValue] = useState(time)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerValue(prevValue => {
        if (prevValue === 0) {
          clearInterval(interval)
          return 0
        } else if (won) {
          clearInterval(interval)
          return prevValue
        }
        return prevValue - 1
      })
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [won])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <div className={styles.timer__value}>{formatTime(timerValue)}</div>
  )
}

Timer.propTypes = {
  time: PropTypes.number.isRequired,
  won: PropTypes.bool.isRequired,
}

export default Timer
