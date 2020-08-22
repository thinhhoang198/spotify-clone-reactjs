import React from "react";
import "./Player.css";
import SideBar from "../Body/SideBar/SideBar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <SideBar />
        <Body spotify={spotify} />
      </div>
      <div className="player__footer">
        <Footer spotify={spotify} />
      </div>
    </div>
  );
}

export default Player;
