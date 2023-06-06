import React from 'react'
import { useState } from 'react'
import styles from './Form.module.css'

const Form = ({ onClose, onSubmit }) => {
    const [formValues, setFormValues] = useState({
        mazeWidth: '6',
        mazeHeight: '6',
        theme: 'jungle',
        skin: 'Chinese',
        timer: '35',
        useTimer: false
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        const newValue = type === 'checkbox' ? checked : value

        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: newValue
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formValues)
        onClose()
        setFormValues({
            mazeWidth: '',
            mazeHeight: '',
            theme: 'jungle',
            skin: 'Chinese',
            timer: '',
            useTimer: false
        })
    }

    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
                <div className={styles.label}>
                    <span className={styles.labeltext}>Width of the Maze</span>
                    <input className={styles.input} type="number" placeholder='6' name="mazeWidth" min="4" max="100" onChange={handleChange} />
                </div>
                <div className={styles.label}>
                    <span className={styles.labeltext}>height of the maze</span>
                    <input className={styles.input} type="number" placeholder='6' name="mazeHeight" min="4" max="100" onChange={handleChange} />
                </div>
                <div className={styles.label}>
                    <span className={styles.labeltext}>Theme</span>
                    <div className={styles.pillsContainer}>
                        <label className={styles.pill}>
                            <input
                                type="radio"
                                name="theme"
                                value="jungle"
                                checked={formValues.theme === 'jungle'}
                                onChange={handleChange}
                            />
                            Jungle
                        </label>
                        <label className={styles.pill}>
                            <input
                                type="radio"
                                name="theme"
                                value="beach"
                                checked={formValues.theme === 'beach'}
                                onChange={handleChange}
                            />
                            Beach
                        </label>
                        <label className={styles.pill}>
                            <input
                                type="radio"
                                name="theme"
                                value="cave"
                                checked={formValues.theme === 'cave'}
                                onChange={handleChange}
                            />
                            Cave
                        </label>
                    </div>
                </div>
                <div className={styles.label}>
                    <span className={styles.labeltext}>Skin</span>
                    <select className={styles.select} name="skin" onChange={handleChange}>
                        <option value="Chinese">Chinese</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                    </select>
                </div>
                <div className={styles.label}>
                    <span className={styles.labeltext}>Time</span>
                    <input className={styles.input} type="number" placeholder='35' name="timer" min="10" max="300" onChange={handleChange} />
                </div>
                <div className={styles.label}>
                    <span className={styles.labeltext}>Use timer</span>
                    <input
                        type="checkbox"
                        name="useTimer"
                        checked={formValues.useTimer}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className={styles.button}>Play</button>
            </form>
        </div>

    )
}

export default Form
