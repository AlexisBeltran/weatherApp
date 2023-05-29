import { useContext } from "react";
import { WheatherContext } from "../Context/WheatherProvider";

const useWheather = () => {
    return useContext(WheatherContext);
}

export default useWheather;