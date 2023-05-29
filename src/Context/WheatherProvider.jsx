import { createContext, useCallback, useEffect, useState } from "react";
import axios from 'axios';

const WheatherContext = createContext();

const WheaterProvider = ({children}) => {
    const [notFound, setNotFound] = useState(false);
    const [count, setCount] = useState(0);
    const [city, setCity] = useState();
    const [infoWheather, setInfoWheather] = useState({
        main: "",
        description: "",
        temp: "",
        humidity: "",
        speed: ""
    });

    const handleSearchWeather = (e) => {
        e.preventDefault();
        if(city !== ""){
            setCount(count + 1);
            dataInfo();
            return;
        }
    }

    const SetCity = (e) => {
        setCity(e.target.value);
    }


    const dataInfo = async () => {
        if(city !== ""){
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a83a1731bae2da8735c3fce2e3b2ebf9`).then(data_info => {
                if(data_info.statusText === "OK"){
                    const {main, description} = data_info.data.weather[0];
                    const {temp, humidity} = data_info.data.main;
                    const {speed} = data_info.data.wind;
                    setInfoWheather({
                        ...infoWheather,
                        main,
                        description,
                        temp,
                        humidity,
                        speed
                    });
                    setNotFound(true);
                }else{
                    setNotFound(false);
                    setInfoWheather({
                        ...infoWheather,
                        main: "",
                        description: "",
                        temp: "",
                        humidity: "",
                        speed: ""
                    });
                }
                
            }).catch(erro => {
                setNotFound(false);
                setInfoWheather({
                    ...infoWheather,
                    main: "",
                    description: "",
                    temp: "",
                    humidity: "",
                    speed: ""
                });
            });
        }
    }


    return(
        <WheatherContext.Provider
            value={{
                SetCity,
                notFound,
                city,
                infoWheather, 
                count,
                handleSearchWeather
            }}
        >
            {children}
        </WheatherContext.Provider>
    )
}


export {
    WheatherContext
}

export default WheaterProvider;