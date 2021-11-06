import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuStyles = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  border: 1px solid grey;
  color: grey;

  & ul {
    list-style: none;
    padding-left: 0px;
  }

  & a:visited {
    color: grey;
  }
`;

const Menu = () => {
  return (
    <MenuStyles>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create-react-app">Create React App</Link>
          </li>
          <li>
            <Link to="/fold">Fold</Link>
          </li>
        </ul>
      </nav>
    </MenuStyles>
  );
};

export default Menu;
