import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuStyles = styled.div`
  position: absolute;
  background: #fff;
  border-radius: 8px;
  padding: 8px 16px;
  top: 20px;
  right: 20px;
  border: 1px solid grey;
  color: grey;
  z-index: 10000;

  & button {
    border: 1px solid grey;
    border-radius: 4px;
    background: #fff;
  }

  & ul {
    list-style: none;
    padding-left: 0px;
  }

  & a:visited {
    color: grey;
  }
`;

const Menu = () => {
  const [menuOpen, setMenuOpen] = React.useState(true);

  return (
    <MenuStyles>
      {menuOpen ? (<nav>
        <button onClick={() => setMenuOpen(false)}>X</button>
        <ul>
          <li>
            <Link to="/fold">Fold</Link>
          </li>
          <li>
            <Link to="/strike">Strike</Link>
          </li>
          <li>
            <Link to="/stripe">Stripe</Link>
          </li>
        </ul>
      </nav>) : <button onClick={() => setMenuOpen(true)}> OPEN </button>}
    </MenuStyles>
  );
};

export default Menu;
