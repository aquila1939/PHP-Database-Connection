import React from 'react';

import './InfoBar.css';
import closeIcon from 'C:\\Users\\siddh\\Desktop\\Sisyphus\\Programming\\React\\real-time-chat\\client\\src\\icons\\closeIcon.png';
import onlineIcon from 'C:\\Users\\siddh\\Desktop\\Sisyphus\\Programming\\React\\real-time-chat\\client\\src\\icons\\onlineIcon.png';
const InfoBar = ({propRoom}) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online image"/>
            <h3>{propRoom}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close image"/></a>
        </div>
        {/* <h1>YOLO</h1> */}
    </div>
)

export default InfoBar;