# Traffic Light Simulator

A Traffic Light Simulator built using **React** with **useContext** for state management and timer-based light transitions. This project implements a traffic light system with three lights: Red, Yellow, and Green, with additional functionality for a pedestrian crossing button and an emergency override button.

## Features

- **Traffic Light System**:
  - Lights follow the sequence: **Green (10s) -> Yellow (3s) -> Red (7s) -> Green**.
  - Each light has a countdown timer showing the remaining seconds before switching to the next light.
  
- **Pedestrian Crossing**:
  - A pedestrian crossing button requests the light to change to red, allowing pedestrians to cross safely.
  - If the button is pressed while the light is green or yellow, the system waits for the current sequence to finish before switching to red.
  - The red light stays on for an additional **5 seconds** after the standard red light duration to allow pedestrians to cross.

- **Emergency Override**:
  - An emergency override button can interrupt the normal light sequence to immediately turn the light red, allowing emergency vehicles to pass.

- **State Management**:
  - The project uses **React Context API** (`useContext`, `createContext`) for managing light state, pedestrian requests, and emergency overrides.

- **Timers**:
  - **`setTimeout`** is used to manage the light transitions.
  - **`setInterval`** is used to update the countdown timers for each light.

## Demo

[Live Demo](https://tarffic-simulator-vikram.netlify.app/)

## Getting Started

Follow these steps to get a local copy of the project up and running.

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your system. You can download it from [here](https://nodejs.org/).
- **npm**: Node Package Manager (npm) is installed with Node.js.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/vikramkonidhala/traffic-light-simulator.git
   cd traffic-light-simulator
