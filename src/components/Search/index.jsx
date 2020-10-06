import React from 'react'
import styles from './Search.module.css'

function Search(props) {
    return (
        <div className={styles.Search}>
            <input 
                type='text'
                placeholder='Raleigh'
                maxLength='50'
                value={props.city}
                onChange={(e) => {props.handleInput(e)}}
            />

            <button onClick={() => {props.handleCityChange()}}>
                Search
            </button>
        </div>
    )
}

export default Search