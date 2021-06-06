import React from "react";

import Search from "./components/Search";
import WeatherNow from "./components/WeatherNow";
import WeatherItems from "./components/WeatherItems";

import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

const App = () => {
  return (
    <div className="app">
        <Search handleInput={()=>{}} />
        <WeatherNow 
          description={'Overcast Clouds'} 
          temperature={'10 to 11C'} 
        />
        <WeatherItems />     
    </div>
  );
}

export default App;
