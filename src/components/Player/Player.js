import React from "react";
import "./Player.css";
import SideBar from "../Body/SideBar/SideBar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Player({ spotify }) {
  return (
    <div className="player">
      <Router>
        <div className="player__body">
          <SideBar />
          <Route path="/" exact>
            <Body spotify={spotify} />
          </Route>
          <Switch>
            <Route path="/playlists/:playlistId">
              <Body spotify={spotify} />
            </Route>
          </Switch>
          <div className="player__footer">
            <Footer spotify={spotify} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default Player;
