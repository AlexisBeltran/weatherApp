import SearchLocation from "./SearchLocation"
import NotFound from "./NotFound"
import WheatherInfo from "./WheatherInfo"
import WheatherDetails from "./WheatherDetails"
import useWheather from "../Hook/UseWheather"


//COMPONENT APP WEATHER
const AppWheather = () => {
    const {notFound, infoWheather, city, count} = useWheather();
    
    return (
        <div className="container" style={{height: notFound ? "596px" : (Object.values(infoWheather).includes("") === true ? "auto" : "400px")}}>
            {
                notFound ? (
                    <>
                        <SearchLocation/>
                        <WheatherInfo
                            data={infoWheather}
                            fadeIn={true}
                        />
                        <WheatherDetails
                            data={infoWheather}
                            fadeIn={true}
                        />
                    </>
                ) : (
                    <>
                        <SearchLocation/>
                        <NotFound
                            fadeIn={true}
                            name={city}
                            count={count}
                            object={Object.values(infoWheather).includes("")}
                        />
                    </>
                )
            }
        </div>
    )
}

export default AppWheather
