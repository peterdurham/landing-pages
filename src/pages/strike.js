import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import StrikeBackground from "../assets/strike/strike_background.png";
import { ReactComponent as StrikeLogo } from "../assets/strike/strike_logo.svg";
import StrikePhone from "../assets/strike/strike_phone.webp";
import StrikePhone2 from "../assets/strike/strike_phone2.webp";
import StrikePhoneFrame from "../assets/strike/strike_phone_frame.png";

const StrikeBackgroundStyles = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap");
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
  position: relative;
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
  padding-bottom: 128px;
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

const SectionTwo = styled.div`
  display: flex;
  flex-direction: space-between;
  & video {
    z-index: 5;
  }
  & .section-2-left {
    width: 560px;

    & .strike-phone-frame {
      width: 280px;
      position: absolute;
      left: 128px;
    }
    & video {
      border-radius: 48px;
      overflow: hidden;

      padding: 14px 18px;
      position: absolute;
      left: 128px;
      height: 526px;
      width: 244px;
    }
  }
  & .section-2-right {
    width: 560px;
    margin-bottom: 54px;
    padding-bottom: 128px;
    & h1 {
      font-size: 60px;
      line-height: 1.08;
      margin: 0px 0px 16px;
    }
    & p {
      margin: 12px 0px 16px;
      line-height: 1.32;
      font-weight: 500;
      font-size: 19px;
      font-weight: 500;
      color: rgb(255, 255, 255);
    }
    & .section-2-grey-text {
      color: rgba(235, 235, 245, 0.6);
      margin-bottom: 54px;

      line-height: 1.32;
      font-weight: 500;
      font-size: 19px;
    }
    & .table-entry {
      box-sizing: border-box;
      margin: 0px;
      min-width: 0px;
      border-bottom: 1px solid rgba(235, 235, 245, 0.18);
      display: flex;
      justify-content: space-between;
      padding-bottom: 16px;
      padding-top: 16px;
    }
    & .table-name {
      line-height: 1.32;
      font-size: 19px;
      color: rgb(255, 255, 255);
      font-weight: 700;
    }
    & #table-value-first {
      color: rgb(50, 215, 75);
      font-weight: 500;
    }
    & .table-value {
      color: rgb(255, 69, 58);
      font-weight: 500;
    }
    & .section-2-tnc {
      margin-top: 16px;
      line-height: 1.32;
      font-weight: 500;
      color: rgba(235, 235, 245, 0.3);
      font-size: 13px;
    }
  }
`;

const SectionThree = styled.div`
  display: flex;
  justify-content: space-between;

  & .section-3-left {
    width: 560px;

    & .section-3-supertext {
      line-height: 1.32;
      color: rgb(204, 255, 0);
      font-size: 19px;
      font-weight: 700;
    }
    & h1 {
      font-size: 60px;
      line-height: 1.08;
      margin-top: 0;
    }
    & .section-3-text {
      margin: 12px 0px 32px;
      min-width: 0px;
      line-height: 1.32;
      font-weight: 500;
      font-size: 19px;
      color: rgba(235, 235, 245, 0.6);
    }
    & .section-3-text span {
      color: white;
      font-weight: 700;
    }
    & button {
      appearance: none;
      display: inline-block;
      text-align: center;
      line-height: inherit;
      text-decoration: none;
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
  }
  & .section-3-right {
    width: 320px;
    margin-right: 120px;
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
        <SectionTwo>
          <div className="section-2-left">
            <img
              src={StrikePhoneFrame}
              alt="strike-phone-frame"
              className="strike-phone-frame"
            />
            <video
              autoplay=""
              height="556px"
              loop="true"
              playsinline=""
              width="280px"
              class="sc-bdfBQB kKKYea"
            >
              <source
                src="https://strike.me/static/buy-bitcoin-e3c6d35b138670c80e960e9d5ea1d2e5.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="section-2-right">
            <h1>Buy and sell bitcoin</h1>
            <div className="section-2-grey-text">
              Strike offers the easiest way to buy bitcoin. Skip fees and stack
              sats, the right way.
            </div>
            <p>What you get on a $100 BTC purchase after fees</p>
            <div className="section-2-table">
              <div className="table-entry">
                <div className="table-name">Strike</div>
                <div className="table-value" id="table-value-first">
                  $100.00
                </div>
              </div>
              <div className="table-entry">
                <div className="table-name">CashApp</div>
                <div className="table-value">$97.74</div>
              </div>
              <div className="table-entry">
                <div className="table-name">Venmo</div>
                <div className="table-value">$97.70</div>
              </div>
              <div className="table-entry">
                <div className="table-name">Coinbase</div>
                <div className="table-value">$97.01</div>
              </div>
              <div className="section-2-tnc">
                Amounts shown are based on publicly available fee schedules
                and/or trades on CashApp, Venmo, and Coinbase as of 09/20/21,
                and are subject to change at any time.
              </div>
            </div>
          </div>
        </SectionTwo>
        <SectionThree>
          <div className="section-3-left">
            <div className="section-3-supertext">Strike API</div>
            <h1>Global payments for the internet</h1>
            <div className="section-3-text">
              Connect your business to a global, instant payments network.
              Marketplaces use Strike’s API to enable payments between buyers
              and sellers or <span>fans and creators</span>. Merchants use
              Strike’s API to accept payments from customers globally.
            </div>
            <button>Learn More</button>
          </div>
          <div className="section-3-right">
            <img src={StrikePhone2} alt="strike-phone-2" />
          </div>
        </SectionThree>
      </StrikeContainer>
    </StrikeBackgroundStyles>
  );
};

export default Strike;
