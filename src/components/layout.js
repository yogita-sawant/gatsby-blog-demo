import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'gatsby';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Scotties';
    src: url('./../../public/fonts/Scotties.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
font-family: cursive;
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f7f7f7;
    color: #333;
  }
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full viewport height */
`;

const Header = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: cursive;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;

    &:hover {
      color: #ffae42;
    }
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem;
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  font-family: cursive;
`;

const Layout = ({ children }) => (
  <LayoutWrapper>
    <GlobalStyle />
    <Header>
      <Logo>Chronicle Hub</Logo>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </Nav>
    </Header>
    <Main>
      {children}
    </Main>
    <Footer>© 2024 Café Euphoria</Footer>
  </LayoutWrapper>
);

export default Layout;
