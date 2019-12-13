import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Content from './components/Content';

import local from './base/locales.json';
import weather from './base/weather.json';

function App() {
  const [localContent, setLocalContent] = useState(local);
  const [weatherContent, setWeatherContent] = useState(weather);
  const [searchTerm, setSearchTerm] = useState("");
  const [nameCity, setnameCity] = useState("");
  const [searchLocalResults, setSearchLocalResults] = useState([]);
  const [searchWeatherResults, setSearchWeatherResults] = useState([]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const loc = Object.values(searchWeatherResults).map(l => {
      return l
    });
    setnameCity(loc["0"])
  }

  useEffect(() => {
    const local = localContent.filter(l => 
        l.name.includes(searchTerm)
    );
    const weather = weatherContent.filter(w =>
      w.locale.name.includes(searchTerm)
    );

    setSearchLocalResults([local]);
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
    <Content weather={nameCity}/>
    </>
  );
}

export default App;
