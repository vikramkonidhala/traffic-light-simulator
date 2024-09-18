import {TrafficLightProvider} from './TrafficLightContext.js'
import TrafficLight from './components/TrafficLight.js'
import './App.css'

function App() {

  return (
    <div className='traffic-app'>
      <h1 className='heading'>Traffic Light Simulation</h1>
      <TrafficLightProvider>
        <TrafficLight/>
      </TrafficLightProvider>
    </div>
  )
}

export default App
