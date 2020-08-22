import React from "react";

import Header from "./Header/Header";
import SongRow from "../SongRow/SongRow";
import { useDataLayerValue } from "../../DataLayer";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import "./Body.css";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  console.log(discover_weekly);
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images?.url} alt={discover_weekly?.name} />
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
    </div>
  );
}

export default Body;