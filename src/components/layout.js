import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'gatsby';
import './../css/custom.css';

const GlobalStyle = createGlobalStyle`

  body {
    font-family: 'Scotties', 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f7f7f7;
    color: #333;
  }
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Scotties';

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Logo = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #ffae42;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
    align-items: center;

    a {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    a {
      font-size: 1rem;
    }
  }
`;

const Main = styled.main`
  flex: 1;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  font-family: 'Scotties';
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
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
