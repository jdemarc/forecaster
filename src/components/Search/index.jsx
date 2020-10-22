import React from 'react'
import styles from './Search.module.css'

const Search = ( {city, handleInput, handleCityChange} ) => {
    return (
        <div className={styles.Search}>
            <input 
                type='text'
                placeholder='Enter city here...'
                maxLength='50'
                value={city}
                onChange={(e) => {handleInput(e)}}
            />

            <button onClick={() => {handleCityChange()}}>
                Search
            </button>
        </div>
    )
}

export default Search