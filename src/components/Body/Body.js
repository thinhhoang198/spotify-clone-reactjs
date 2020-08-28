import React, { useEffect, useState } from "react";

import Header from "./Header/Header";
import SongRow from "../SongRow/SongRow";
import { useDataLayerValue } from "../../DataLayer";
import { useParams } from "react-router-dom";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import "./Body.css";

function Body({ spotify }) {
  const [{ discover_weekly }] = useDataLayerValue();
  const { playlistId } = useParams();
  const [playlist, setPlaylist] = useState({});

  useEffect(() => {
    spotify.getPlaylist(playlistId).then((res) => {
      setPlaylist(res);
    });
  }, [playlistId]);

  return (
    <div className="body">
      <Header spotify={spotify} />
      {!playlist ? (
        <>
          <div className="body__info">
            <img
              src={discover_weekly?.images.url}
              alt={discover_weekly?.name}
            />
            <div className="body__infoText">
              <strong>Playlist</strong>
              <h2>{discover_weekly?.name}</h2>
              <p>{discover_weekly?.description}</p>
            </div>
          </div>

          <div className="body__songs">
            <div className="body__icons">
              <PlayCircleFilledIcon className="body__shuffle" />
              <FavoriteIcon fontSize="large" />
              <MoreHorizIcon />
            </div>

            {discover_weekly?.tracks?.items.map((item) => (
              <SongRow track={item.track} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="body__info">
            <img src={playlist?.images?.url} alt={playlist?.name} />
            <div className="body__infoText">
              <strong>Playlist</strong>
              <h2>{playlist?.name}</h2>
              <p>{playlist?.description}</p>
            </div>
          </div>

          <div className="body__songs">
            <div className="body__icons">
              <PlayCircleFilledIcon className="body__shuffle" />
              <FavoriteIcon fontSize="large" />
              <MoreHorizIcon />
            </div>

            {playlist?.tracks?.items.map((item) => (
              <SongRow track={item.track} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Body;
