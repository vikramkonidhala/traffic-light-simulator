import {useData} from "../TrafficLightContext.js"
import RedLight from "./RedLight.js"
import YellowLight from "./YellowLight.js"
import GreenLight from "./GreenLight.js"
import PedistrianButton from "./PedistrianButton.js"
import EmergencyButton from "./EmergencyButton.js"
import "./TrafficLight.css"

const TrafficLight = () =>{
    const {trafficSense} = useData()

    return(
        <>
        <div className="traffic-light">
            <RedLight/>
            <YellowLight/>
            <GreenLight/>
            <p className="timer">{trafficSense.timer}s</p>
        </div>
        <div className="buttons-conatiner">
            <PedistrianButton/>
            <EmergencyButton/>
        </div>
        </>
        
    )
}

export default TrafficLight