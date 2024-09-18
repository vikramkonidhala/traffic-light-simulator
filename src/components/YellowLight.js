import {useData} from "../TrafficLightContext.js"
import "./TrafficLight.css"

const YellowLight = () =>{
    const {trafficSense} = useData()
    const isActive = trafficSense.color === "yellow" ? "yellow-light" : null

    return <div className={`light ${isActive}`}></div>
}

export default YellowLight;