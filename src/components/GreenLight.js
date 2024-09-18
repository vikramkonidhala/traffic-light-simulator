import {useData} from "../TrafficLightContext.js"
import "./TrafficLight.css"

const GreenLight = () =>{
    const {trafficSense} = useData()
    const isActive = trafficSense.color === "green" ? "green-light" : null

    return <div className={`light ${isActive}`}></div>
}

export default GreenLight;