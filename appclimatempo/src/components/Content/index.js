import React, { useState} from 'react';

import "./style.css";

function Content(weather) {
  const { locale , period} = weather.local;

  return (
    <div className="wrapper">
      <div className="container">
        <div className="title-prev">
        <h1>Previsão para </h1>
        </div>
        <div className="card-section">
          <div className="card">
            <div className="card-header">
              <h4>01/02/2017</h4>
              <p>Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.</p>
            </div>
            <div className="card-body">
              <div className="temp-degree">
                <span className="up-icon"></span>
                <p className="up-degree">20º</p>
              </div>
              <div className="temp-degree">
                <span className="down-icon"></span>
                <p className="down-degree">10º</p>
              </div>
              <div className="temp-degree">
                <span className="rain-drop-icon"></span>
                <p className="mm-percent-degree">50mm</p>
              </div>
              <div className="temp-degree">
                <span className="umbrella-icon"></span>
                <p className="mm-percent-degree">50%</p>
              </div>
            </div>
          </div>
        </div>
       
    </div>
    </div>
  );
}

export default Content;
