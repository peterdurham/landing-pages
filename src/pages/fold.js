import React from "react";
import { Link } from "react-router-dom";

import FoldLogo from "../assets/fold/fold_logo.png";
import VisaFold from "../assets/fold/visa_fold.png";
import FoldCard from "../assets/fold/fold_card.png";
import FloatingBitcoin from "../assets/fold/floating_bitcoin.png";
import FloatingBitcoin2 from "../assets/fold/floating_bitcoin2.png";
import FloatingBlur from "../assets/fold/floating_blur.png";
import FloatingBlur2 from "../assets/fold/floating_blur2.png";
import FloatingBlur3 from "../assets/fold/floating_blur3.png";
import FloatingBlur4 from "../assets/fold/floating_blur4.png";
import FloatingBolt from "../assets/fold/floating_bolt.png";
import FloatingCoin from "../assets/fold/floating_coin.png";
import FloatingCoin2 from "../assets/fold/floating_coin2.png";
import FloatingCoins from "../assets/fold/floating_coins.png";
import FloatingPresent from "../assets/fold/floating_present.png";
import FloatingRadish from "../assets/fold/floating_radish.png";
import FloatingSpin from "../assets/fold/floating_spin.png";
import styled from "styled-components";

const FoldPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Secular+One&display=swap");

  font-family: "DM Sans", sans-serif;
`;

const FoldNav = styled.nav`
  width: 1067px;
  height: 84px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & img {
    padding-top: 10px;
    width: 22px;
  }
`;

const FoldNavLinks = styled.ul`
  & a {
    text-transform: uppercase;
    font-size: 12px;
    margin: 0 15px 20px;
    padding: 34px 0 10px;
    font-weight: 700;
    color: black;
    text-decoration: none;
  }
`;

const FoldContainer = styled.main`
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
`;

const FoldHeader = styled.div`
  & .fold-visa {
    text-align: center;
    width: 135px;
    padding-top: 10px;
  }
  & h1 {
    font-family: "Secular One", sans-serif;
    font-size: 4vw;
    line-height: 70%;
    letter-spacing: 5px;
    font-weight: 400;
  }
  & .top-header {
    margin: 20px 0;
  }
  & .bottom-header {
    margin: 0 0 10px;
  }
  & .card-phone-container {
    width: 415px;
    margin: 20px auto 0;
    position: relative;
    height: auto;
    display: flex;
    justify-content: center;
  }
  & .fold-card {
    width: 335px;
    position: absolute;
    left: 0;
    top: 95px;
    z-index: 2;
  }
  & video {
    width: 230px;
    position: absolute;
    right: 0;
    z-index: 1;
  }
  & .header-text {
    max-width: 430px;
    font-size: 18px;
    line-height: 25px;
    padding-top: 460px;
  }
  @keyframes FloatUpAndDown {
    0% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(-5px);
    }
  }
  & .floating {
    width: 49px;
    position: absolute;
    left: 290px;
    top: 290px;
    animation: FloatUpAndDown infinite;
  }
  & .FloatingBitcoin {
    left: 390px;
    top: 290px;
  }
  & .FloatingBitcoin2 {
    left: 1210px;
    top: 440px;
    width: 61px;
  }
  & .FloatingBlur {
    left: 190px;
    top: 330px;
    width: 74px;
  }
  & .FloatingBlur2 {
    left: 1170px;
    top: 150px;
    width: 64px;
  }
  & .FloatingBlur3 {
    left: 1320px;
    top: 490px;
    width: 99px;
  }
  & .FloatingBlur4 {
    left: 430px;
    top: 150px;
    width: 99px;
  }
  & .FloatingBolt {
    left: 1120px;
    top: 290px;
    width: 75px;
  }
  & .FloatingCoin {
    left: 1320px;
    top: 290px;
    width: 75px;
  }
  & .FloatingCoin2 {
    left: 520px;
    top: 570px;
    width: 69px;
  }
  & .FloatingCoins {
    left: 430px;
    top: 470px;
    width: 54px;
  }
  & .FloatingPresent {
    left: 530px;
    top: 340px;
    width: 59px;
  }
  & .FloatingRadish {
    left: 1090px;
    top: 590px;
    width: 69px;
  }
  & .FloatingSpin {
    left: 310px;
    top: 620px;
  }
`;

function Fold() {
  return (
    <FoldPage>
      <FoldNav>
        <img src={FoldLogo} alt="fold logo" />
        <FoldNavLinks>
          <Link to="/fold">Debit Card</Link>
          <Link to="/fold">Compare Plans</Link>
          <Link to="/fold">Support</Link>
          <Link to="/fold">Get The App</Link>
        </FoldNavLinks>
      </FoldNav>
      <FoldContainer>
        <FoldHeader>
          <img src={VisaFold} className="fold-visa" alt="visa fold" />
          <h1 className="top-header">Earn Bitcoin On</h1>
          <h1 className="bottom-header">Everything</h1>
          <div className="card-phone-container">
            <img src={FoldCard} className="fold-card" alt="fold card" />
            <video
              class="spin-phone"
              autoplay=""
              width="230px"
              height="auto"
              muted=""
            >
              <source
                src="https://thumbs.gfycat.com/FastElaborateIslandwhistler-mobile.mp4"
                type="video/mp4"
              />
              Your browser does not support the HTML5 Video element.
            </video>
            <div className="header-text">
              Win up to 100% back on every purchase.* Every swipe is a chance to
              win a whole bitcoin.†
            </div>
          </div>
          <img
            src={FloatingBitcoin}
            alt="floating-bitcoin"
            className="floating FloatingBitcoin"
          />
          <img
            src={FloatingBitcoin2}
            alt="floating-bitcoin2"
            className="floating FloatingBitcoin2"
          />
          <img
            src={FloatingBlur}
            alt="FloatingBlur"
            className="floating FloatingBlur"
          />
          <img
            src={FloatingBlur2}
            alt="FloatingBlur2"
            className="floating FloatingBlur2"
          />
          <img
            src={FloatingBlur3}
            alt="FloatingBlur3"
            className="floating FloatingBlur3"
          />
          <img
            src={FloatingBlur4}
            alt="FloatingBlur4"
            className="floating FloatingBlur4"
          />
          <img
            src={FloatingBolt}
            alt="FloatingBolt"
            className="floating FloatingBolt"
          />
          <img
            src={FloatingCoin}
            alt="FloatingCoin"
            className="floating FloatingCoin"
          />
          <img
            src={FloatingCoin2}
            alt="FloatingCoin2"
            className="floating FloatingCoin2"
          />
          <img
            src={FloatingCoins}
            alt="FloatingCoins"
            className="floating FloatingCoins"
          />
          <img
            src={FloatingPresent}
            alt="FloatingPresent"
            className="floating FloatingPresent"
          />
          <img
            src={FloatingRadish}
            alt="FloatingRadish"
            className="floating FloatingRadish"
          />
          <img
            src={FloatingSpin}
            alt="FloatingSpin"
            className="floating FloatingSpin"
          />
        </FoldHeader>
      </FoldContainer>
    </FoldPage>
  );
}

export default Fold;
