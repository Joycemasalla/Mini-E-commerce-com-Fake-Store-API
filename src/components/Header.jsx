// src/components/Header.jsx
import React from 'react';
import { StyledHeader, Logo, LogoLink, Nav, NavList, NavItem, StyledLink, CartCountBadge } from './Header.styles';
import { useNavigate } from 'react-router-dom';

function Header({ cartItemCount, loggedInUser, onLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/');
  };

  return (
    <StyledHeader>
      <div className="header-content-wrapper"> {/* <-- NOVO WRAPPER */}
        <Logo>
          <LogoLink to="/">React Shop</LogoLink>
        </Logo>
        <Nav>
          <NavList>
            <NavItem><StyledLink to="/">Produtos</StyledLink></NavItem>
            <NavItem>
              <StyledLink to="/carrinho">
                Carrinho
                {cartItemCount > 0 && (
                  <CartCountBadge>{cartItemCount}</CartCountBadge>
                )}
              </StyledLink>
            </NavItem>
            {loggedInUser ? (
              <>
                <NavItem><StyledLink to="/profile">Olá, {loggedInUser.username}</StyledLink></NavItem>
                <NavItem><StyledLink as="button" onClick={handleLogoutClick}>Logout</StyledLink></NavItem>
              </>
            ) : (
              <NavItem><StyledLink to="/login">Login</StyledLink></NavItem>
            )}
          </NavList>
        </Nav>
      </div> {/* <-- FIM DO NOVO WRAPPER */}
    </StyledHeader>
  );
}

export default Header;