import React, { useState } from "react";

import "./SideBar.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import { useDataLayerValue } from "../../../DataLayer";
import { Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

function SideBar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <Link to={`/playlists/${playlist.id}`}>
          <SidebarOption title={playlist.name} />
        </Link>
      ))}
    </div>
  );
}

export default SideBar;
