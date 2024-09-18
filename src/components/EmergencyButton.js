import {useData} from "../TrafficLightContext.js"

const EmergencyButton = () =>{
    const {trafficSense, onChangeEmergency} = useData()

    const onClickEmergency = () =>{
        onChangeEmergency(!trafficSense.isEmergency)
    }

    return <button className="emergency-button" onClick={onClickEmergency} type="button">
        Emergency
        </button>
}


export default EmergencyButton