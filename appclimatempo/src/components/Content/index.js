import React, { useState} from 'react';

import "./style.css";

function Content(temp) {
  const { locale , weather } = temp.weather;

  var local = {};
  Object.assign(local, locale);
  
  var info = {};
  Object.assign(info, weather)

  return (
    <div className="wrapper">
      <div className="container">
        <div className="title-prev">
        <h1>Previsão para {local.name} - {local.state}</h1>
        </div>
        <div className="card-section">
        {Object.values(info).map((item, i) => (
          item ? (
            <div className="card" key={i}>
              <div className="card-header">
                <h4>{item.date}</h4>
                <p>{item.text}</p>
              </div>
              <div className="card-body">
                <div className="temp-degree">
                  <span className="up-icon"></span>
                  <p className="up-degree">{item.temperature.max} º</p>
                </div>
                <div className="temp-degree">
                  <span className="down-icon"></span>
                  <p className="down-degree">{item.temperature.min} º</p>
                </div>
                <div className="temp-degree">
                  <span className="rain-drop-icon"></span>
                  <p className="mm-percent-degree">{item.rain.probability} mm</p>
                </div>
                <div className="temp-degree">
                  <span className="umbrella-icon"></span>
                  <p className="mm-percent-degree">{item.rain.precipitation} %</p>
                </div>
              </div>
            </div>
        
          ) : (
            <h1>AA</h1>
          )
        ))}
        </div>
       
    </div>
    </div>
  );
}

export default Content;
