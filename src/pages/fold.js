import React from "react";
import { Link } from "react-router-dom";

import FoldLogo from "../assets/fold/fold_logo.png";
import VisaFold from "../assets/fold/visa_fold.png";
import FoldCard from "../assets/fold/fold_card.png";
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
          <img src={FoldCard} alt="fold card" />
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
        </FoldHeader>
      </FoldContainer>
    </FoldPage>
  );
}

export default Fold;
