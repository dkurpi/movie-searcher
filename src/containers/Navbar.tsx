import React from "react";
import styled from "styled-components";

export function Navbar() {
  return (
    <NavWrapper>
      <Nav href={"/"}>
        <ColorText>MOVIE</ColorText>
        <span>SEARCHER</span>
      </Nav>
    </NavWrapper>
  );
}

const ColorText = styled.span`
  color: ${({ theme }) => theme.white};
  font-weight: 200;
  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Nav = styled.a`
  display: block;
  top: 0;
  left: 0;
  right: 0;
  font-weight: 800;
  padding: 2vh 0;
  text-align: left;
  max-width: 1380px;
  margin: 0 auto;
  cursor: pointer;
  color: white;
  :link {
    text-decoration: none;
    color: #06c;
  }
  :hover {
    color: white;
  }
  text-align: center;
`;
const NavWrapper = styled.nav``;
