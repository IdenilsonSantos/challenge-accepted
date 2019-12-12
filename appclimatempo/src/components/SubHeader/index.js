import React from 'react';
import "./style.css";


function SubHeader() {
  return (
    <div className="sub-header">
        <div className="container">
            <div className="form-box">
                <input className="input-location"/>
                <button className="button-search"/>
            </div>
        </div>
    </div>
  );
}

export default SubHeader;
