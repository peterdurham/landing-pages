import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import StrikeBackground from "../assets/strike/strike_background.png";
import { ReactComponent as StrikeLogo } from "../assets/strike/strike_logo.svg";
import StrikePhone from "../assets/strike/strike_phone.webp";

const StrikeBackgroundStyles = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
  font-family: "Montserrat", sans-serif;
  width: 100vw;
  height: 100vh;
  color: white;

  & a {
    color: white;
    text-decoration: none;
  }

  & #strike-background {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
  }
`;

const StrikeContainer = styled.main`
  width: 1136px;
  margin: 0 auto;
`;

const StrikeNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  margin-bottom: 128px;
  font-size: 19px;
  font-weight: 700;

  & .nav-links a:not(:last-child) {
    margin-right: 32px;
  }
  & .nav-links a:first-child {
    color: rgb(204, 255, 0);
  }
  & .nav-links a:hover {
    border-bottom: 1px solid currentcolor;
  }
`;

const StrikeHero = styled.div`
  height: 573px;
  display: flex;
  justify-content: space-between;

  & .hero-text {
    width: 560px;
    padding-top: 60px;
  }
  & h1 {
    font-size: 60px;
    line-height: 1.08;
    margin-bottom: 16px;
  }
  & p {
    line-height: 1.32;
    font-weight: 500;
    font-size: 19px;
    color: rgba(235, 235, 245, 0.6);
  }
  & .button-container {
    margin: 32px 0;
    width: 195px;
  }
  & .button-container button {
    border: 0px;
    letter-spacing: -0.19px;
    font-size: 20px;
    font-weight: 700;
    outline: none;
    color: rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
    border-radius: 28px;
    padding: 14px 45px;
    cursor: pointer;
  }
  & .button-container button:hover {
    background-color: rgba(235, 235, 245, 0.6);
  }
  & .button-container .button-text {
    font-size: 13px;
    font-weight: 500;
    line-height: 1.32;
    color: rgba(235, 235, 245, 0.6);
    margin: 8px 0px 0px;
    text-align: center;
  }
  & .strike-phone {
    width: 280px;
    margin-right: 140px;
  }
`;

const Strike = () => {
  return (
    <StrikeBackgroundStyles>
      <img src={StrikeBackground} id="strike-background" />
      <StrikeContainer>
        <StrikeNav>
          <StrikeLogo style={{ cursor: "pointer" }} />
          <div className="nav-links">
            <Link to="/strike">API</Link>
            <Link to="/strike">FAQ</Link>
            <Link to="/strike">Jobs</Link>
          </div>
        </StrikeNav>
        <StrikeHero>
          <div className="hero-text">
            <h1>A more connected financial world</h1>
            <p>
              Send and receive money instantly. Buy bitcoin. Get paid in
              bitcoin.
            </p>
            <div className="button-container">
              <button>Download</button>
              <div className="button-text">iOS, Android, Chrome</div>
            </div>
          </div>
          <img src={StrikePhone} className="strike-phone" alt="strike-phone" />
        </StrikeHero>
      </StrikeContainer>
    </StrikeBackgroundStyles>
  );
};

export default Strike;
