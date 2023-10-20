import React from 'react';
// Import data and WeatherCard here
import WeatherCard from './components/WeatherCard'
import cities from './data';


function App() {
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {/* Render components here */}
                {cities.map((city, index) => (
                    <WeatherCard 
                    key={index}
                    city={city.city}
                    temp={city.temperature}
                    forecast={city.forecast}
                    />
                ))}


            </div>
            
        </>
    )
}

export default App;