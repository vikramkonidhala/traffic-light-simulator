import React, { useState, createContext, useContext, useEffect } from 'react';

const TrafficLightContext = createContext();

export const TrafficLightProvider = ({ children }) => {
  const [trafficSense, setTrafficSense] = useState({
    color: 'green',
    isPedistrianRequested: false,
    isEmergency: false,
    timer: 10, 
  });

  if(trafficSense.isEmergency){
    setTrafficSense({...trafficSense, color: "red", timer: 7, isEmergency: false})
  }

  useEffect(() => {
    const changeLight = () => {
      setTrafficSense((prevLight) => {
        switch (prevLight.color) {
          case 'red':
            return { ...prevLight, color: 'yellow', timer: 3};
          case 'yellow':
            return { ...prevLight, color: 'green', timer: 10 };
          case 'green':
            return { ...prevLight, color: 'red', timer: trafficSense.isPedistrianRequested ? 12 : 7, isPedistrianRequested: false };
          default:
            return { ...prevLight, color: 'green', timer: 10 };
        }
      });
    };

    const intervalId = setInterval(() => {
      setTrafficSense((prevState) => {
        if (prevState.timer > 1) {
          return { ...prevState, timer: prevState.timer - 1 };
        } else {
          changeLight();
          return prevState;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [trafficSense.color, trafficSense.isPedistrianRequested]);

  const onChangePedistrian = (val) =>{
    setTrafficSense((prev) => {
        return {...prev, isPedistrianRequested: val}
      })
  } 

  const onChangeEmergency = (val) =>{
    setTrafficSense((prev) => {
        return {...prev, isEmergency: val}
      })
  } 

  return (
    <TrafficLightContext.Provider value={{ trafficSense, onChangePedistrian, onChangeEmergency }}>
      {children}
    </TrafficLightContext.Provider>
  );
};

export const useData = () => useContext(TrafficLightContext);
