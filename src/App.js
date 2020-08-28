import React, { useEffect } from "react";
import "./App.css";

import { getTokenFromUrl } from "./spotify";
import { useDataLayerValue } from "./DataLayer";
import SpotifyWebApi from "spotify-web-api-js";

import Login from "./components/Login/Login";
import Player from "./components/Player/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const token = hash.access_token;
    if (token) {
      dispatch({
        type: "SET_TOKEN",
        token: token,
      });
      spotify.setAccessToken(token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcUlsdYcdTtok").then((res) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: res,
        });
      });
    }
  }, []);
  return (
    <div className="app">
      {!token ? <Login /> : <Player spotify={spotify} />}
    </div>
  );
}

export default App;
