import React from 'react'
import useWheather from '../Hook/UseWheather'

const SearchLocation = () => {
    const {SetCity, handleSearchWeather} = useWheather();

    

    return (
        <div className="search-box">
            <form onSubmit={handleSearchWeather} className='form-info'>
                <i className="fa-solid fa-location-dot"></i>
                <input 
                    type="text" 
                    placeholder="Enter your location" 
                    name='city'
                    onChange={SetCity}
                />
                <button 
                    className="fa-solid fa-magnifying-glass"
                    type='submit'
                ></button>
            </form>
            
        </div>
    )
}

export default SearchLocation
