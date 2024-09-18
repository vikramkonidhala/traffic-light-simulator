import {useData} from "../TrafficLightContext.js"

const PedistrianButton = () =>{
    const {trafficSense, onChangePedistrian} = useData()

    const onClickPedistrian = () =>{
        onChangePedistrian(!trafficSense.isPedistrianRequested)
    }

    return <button className="pedestrian-button" onClick={onClickPedistrian} type="button">
        Pedistrian Cross
        </button>
}


export default PedistrianButton