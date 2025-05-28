// src/components/Header.jsx
import React from 'react';
import { StyledHeader, Logo, StyledLink, Nav, NavList, NavItem, CartCountBadge } from './Header.styles';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para logout

// Recebe loggedInUser e onLogout como props
function Header({ cartItemCount, loggedInUser, onLogout }) {
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        onLogout();
        navigate('/'); // Redireciona para a página inicial após o logout
    };

    return (
        <StyledHeader>
            <Logo>
                <StyledLink to="/">ReactShop</StyledLink>
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
                    {loggedInUser ? ( // Renderiza links diferentes se o usuário estiver logado
                        <>
                            <NavItem><StyledLink to="/profile">Olá, {loggedInUser.username}</StyledLink></NavItem>
                            <NavItem><StyledLink as="button" onClick={handleLogoutClick}>Logout</StyledLink></NavItem> {/* Usar 'as="button"' para estilizar como link */}
                        </>
                    ) : ( // Renderiza link de login se o usuário não estiver logado
                        <NavItem><StyledLink to="/login">Login</StyledLink></NavItem>
                    )}
                </NavList>
            </Nav>
        </StyledHeader>
    );
}

export default Header;