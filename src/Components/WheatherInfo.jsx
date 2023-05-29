import React from 'react'
import { FoundWeather } from '../Helpers/functions';

const WheatherInfo = (prop) => {
  const {description, temp, main} = prop.data;
  return (
    <div className={`weather-box ${prop.fadeIn === true ? "fadeIn" : ""}`}>
        <img src={FoundWeather(main)} alt="Weather" />
        <p className="temperature">{parseInt(temp)}°C</p>
        <p className="description">{description}</p>
    </div>
  )
}

export default WheatherInfo
