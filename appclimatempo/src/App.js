import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Content from './components/Content';

import weather from './base/weather.json';

function App() {
  const [weatherContent, setWeatherContent] = useState(weather);
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherCity, setWeatherCity] = useState("");
  const [searchWeatherResults, setSearchWeatherResults] = useState([]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(searchTerm != ""){
      const local = Object.values(searchWeatherResults).map(l => {
        return l
      });
  
      setWeatherCity(local["0"])
    }
  }

  useEffect(() => {

    const weather = weatherContent.filter(w =>
      w.locale.name.includes(searchTerm)
    );
    
    setSearchWeatherResults(weather);

  }, [searchTerm]);

  return (
    <>
    <Header/>
    <div className="sub-header">
        <div className="container">
            <form className="form-box" onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite aqui a localidade" value={searchTerm} onChange={handleChange} className="input-location"/>
                <button className="button-search"/>
            </form>
        </div>
    </div>
    {weatherCity ? 
      <Content weather={weatherCity}/> : 
      <div className="wrapper">
        <div className="container">
          <div className="warning">
            Não há dados a serem mostrados para esta localidade.
          </div>
        </div>
      </div>
    }
    </>
  );
}

export default App;
