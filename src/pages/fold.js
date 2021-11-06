import React from "react";
import FoldLogo from "../assets/fold/fold_logo.png";
import VisaFold from "../assets/fold/visa_fold.png";
import styled from "styled-components";

const FoldPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans&display=swap");

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
  }
`;

const FoldContainer = styled.main`
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  & .fold-visa {
    text-align: center;
    width: 135px;
    padding-top: 10px;
  }
`;

function Fold() {
  return (
    <FoldPage>
      <FoldNav>
        <img src={FoldLogo} />
        <FoldNavLinks>
          <a>Debit Card</a>
          <a>Compare Plans</a>
          <a>Support</a>
          <a>Get The App</a>
        </FoldNavLinks>
      </FoldNav>
      <FoldContainer>
        <img src={VisaFold} className="fold-visa" />
      </FoldContainer>
    </FoldPage>
  );
}

export default Fold;
