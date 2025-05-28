// src/components/Header.styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Para estilizar o Link

export const StyledHeader = styled.header`
  padding: 15px 30px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px 20px;
  }
`;

export const Logo = styled.h1`
  margin: 0;
  font-size: 1.8em;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

export const Nav = styled.nav`
  margin-top: 0;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 15px;
  }
`;

export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #555;
    font-weight: bold;
    transition: color 0.3s ease;
    position: relative;

    &:hover {
      color: #007bff;
    }
  }
`;

export const CartCountBadge = styled.span`
  background-color: #dc3545;
  color: white;
  border-radius: 50%;
  padding: 3px 8px;
  font-size: 0.8em;
  position: absolute;
  top: -10px;
  right: -15px;
  min-width: 20px;
  text-align: center;
  line-height: 1;
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
`;