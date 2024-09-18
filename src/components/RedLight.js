import {useData} from "../TrafficLightContext.js"
import "./TrafficLight.css"

const RedLight = () =>{
    const {trafficSense} = useData()
    const isActive = trafficSense.color === "red" ? "red-light" : null

    return <div className={`light ${isActive}`}></div>
}

export default RedLight;