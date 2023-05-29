import clear from "../Img/clear.png";
import rain from "../Img/rain.png";
import snow from "../Img/snow.png";
import cloud from "../Img/cloud.png";
import mist from "../Img/mist.png";

//CHANGE IMAGE FROM WEATHER

const FoundWeather = (main) => {
    let image = "";
    switch (main) {
        case 'Clear':
            image = clear;
            break;

        case 'Rain':
            image = rain;
            break;

        case 'Snow':
            image = snow;
            break;

        case 'Clouds':
            image = cloud;
            break;

        case 'Haze':
            image = mist;
            break;

        default:
            image = '';
    }
    return image;
}


export{
    FoundWeather
}