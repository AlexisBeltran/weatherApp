import React from 'react'

const WheatherDetails = (prop) => {
  const {humidity, speed} = prop.data;
  return (
    <div className={`weather-details ${prop.fadeIn === true ? "fadeIn" : ""}`}>
        <div className="humidity">
          <i className="fa-solid fa-water"></i>
          <div className="text">
            <span>{humidity}%</span>
            <p>Humidity</p>
          </div>
        </div>
        <div className="wind">
          <i className="fa-solid fa-wind"></i>
          <div className="text">
            <span>{speed}Km/h</span>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
  )
}

export default WheatherDetails
