import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'gatsby';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Scotties';
    src: url('/fonts/BAMIDA.otf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
   font-family: 'Scotties', 'Arial', sans-serif;
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
  font-family: 'Scotties';
`;

const Logo = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
  letter-spacing: 2px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    color: white;
    text-decoration: none;
    font-size: 3rem;
    transition: color 0.3s;

    &:hover {
      color: #ffae42;
    }
  }
`;

const Main = styled.main`
  flex: 1;
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  font-family: 'Scotties';
  font-size:2rem;
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
