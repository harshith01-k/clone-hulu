import React from "react";
import "./Header.css";
import logo from "./hulu-white.png";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import QueueIcon from "@material-ui/icons/Queue";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router";
import { auth } from "./Firebase";

const Header = ({ user, setUser }) => {
  const history = useHistory();
  const headerAuthen = () => {
    if (user) {
      auth.signOut();
      history.push("/");
      setUser(false);
      // console.log(auth);
    }
  };

  return (
    <div className="header_bar">
      <div className="header_part">
        <div className="icons">
          <div className="icon active">
            <HomeIcon />
            <p>home</p>
          </div>
          <div className="icon">
            <FlashOnIcon />
            <p>trending</p>
          </div>
          <div className="icon">
            <LiveTvIcon />
            <p>verified</p>
          </div>
          <div className="icon">
            <QueueIcon />
            <p>collections</p>
          </div>
          <div className="icon">
            <SearchIcon />
            <p>search</p>
          </div>
          <div className="ico">
            <button className="btnn" onClick={headerAuthen}>
              signOut
            </button>
          </div>
        </div>
        <div className="hulu_logo">
          <img src={logo} alt="a hulu logo" className="logo" />
        </div>
      </div>
    </div>
  );
};
export default Header;
