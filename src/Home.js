import React, { useState } from "react";
import "./Home.css";
import { auth } from "./Firebase";
import { useHistory } from "react-router";
import hulu from "./hulu-green.png";
import { Link } from "react-router-dom";

const Home = ({ user, setUser }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Mail = (e) => {
    setEmail(e.target.value);
    // console.log(e.target.value);
  };
  const Password = (e) => {
    setPassword(e.target.value);
    // console.log(e.target.value);
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        setUser(!user);
        // console.log(auth);
        history.push("/home");
      })
      .catch((error) => alert(error.message));
  };
  const regiester = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        setUser(!user);
        // console.log(auth);
        history.push("/home");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div
      className="home_banner"
      style={{
        backgroundImage: `url(https://www.hulu.com/static/hitch/s3/attachments/ckbvd0gyz00xg19mlsu9nayv7-homepage-masthead-test-desktop-3200x1320-v4c-6-16-20.jpg)`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="form">
        <form>
          <img className="logo" src={hulu} alt="an alternate" />
          <div className="email item">
            <p>E- Mail</p>
            <input
              onChange={Mail}
              type="email"
              className="emailBox"
              placeholder="Enter your email"
            />
          </div>
          <div className="password item">
            <p>Password</p>
            <input
              onChange={Password}
              placeholder="Enter password"
              type="password"
              className="pwd"
            />
          </div>
          <div className="signInBtn">
            <Link to={!user && "/"}>
              <button type="submit" onClick={signIn} className="signin">
                sign In
              </button>
            </Link>
          </div>
          <div className="desc">
            <p>If You are new to hulu account plz sign Up</p>
            {/* <p</p> */}
          </div>
          <div className="signUpBtn">
            <Link to={!user && "/"}>
              <button type="submit" onClick={regiester} className="signin">
                sign up
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Home;
