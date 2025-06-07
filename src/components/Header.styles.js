// src/components/Header.styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%; /* Garante que o header ocupe 100% da largura */
  animation: slideIn 0.6s ease-out;

  /* Adiciona um container interno para limitar a largura e aplicar flex */
  .header-content-wrapper { /* Este é o novo wrapper interno */
    display: flex; /* Torna o wrapper um flex container */
    justify-content: space-between; /* Espaça logo e navegação */
    align-items: center; /* Alinha verticalmente */
    height: 80px; /* Altura do header */
    max-width: 1200px; /* Limita a largura do conteúdo interno */
    margin: 0 auto; /* Centraliza o conteúdo interno */
    padding: 0 2rem; /* Adiciona padding interno */

    @media (max-width: 768px) {
      flex-direction: column; /* Empilha em telas menores */
      height: auto; /* Ajusta altura automaticamente */
      padding: 1rem 1rem; /* Mais padding em telas menores */
      text-align: center; /* Centraliza texto em telas menores */
      gap: 1rem; /* Espaçamento entre logo e nav em telas menores */
    }
  }

  @media (max-width: 768px) {
    /* Estilos específicos para o StyledHeader em mobile, se necessário */
  }
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: white; /* Cor do texto do logo */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Sombra mais visível */
  letter-spacing: 1px; /* Para um efeito mais bonito */

  &:hover {
    transform: scale(1.03); /* Animação um pouco mais sutil */
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem; /* Ajuste para mobile */
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* Herda a cor do Logo div */
  display: flex;
  align-items: center;
  justify-content: center; /* Se houver um ícone ao lado do texto, centraliza */
  gap: 0.5rem;
  font-weight: inherit; /* Herda o peso da fonte do Logo div */
  transition: color 0.3s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.9); /* Um pouco mais brilhante no hover */
  }
`;

// O componente Nav não precisa ser um flex container principal agora
// Ele será apenas um container para a NavList
export const Nav = styled.nav`
  /* Não precisa de display: flex aqui se o pai já gerencia */
  /* Altura, max-width e margin: 0 auto não são mais necessários aqui */
  width: auto; /* Deixa a largura ser definida pelo conteúdo */

  @media (max-width: 768px) {
    width: 100%; /* Ocupa a largura total disponível no modo coluna */
  }
`;

export const NavList = styled.ul`
  display: flex; /* Continua sendo um flex container para os itens da lista */
  list-style: none;
  align-items: center;
  gap: 2.5rem; /* Aumentar um pouco o espaçamento para mais elegância */
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-wrap: wrap; /* Permite que os itens quebrem linha */
    justify-content: center; /* Centraliza os itens quando quebrarem */
    gap: 1.2rem; /* Ajuste de espaçamento para mobile */
  }
`;

export const NavItem = styled.li`
  position: relative;
`;

export const StyledLink = styled(Link)`
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.25); /* Um pouco mais opaco no hover */
    transform: translateY(-3px); /* Efeito de elevação maior */
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2); /* Sombra mais proeminente */
    backdrop-filter: blur(12px); /* Blur um pouco maior */
  }

  &:active {
    transform: translateY(0);
  }

  /* Estilo para botão de logout */
  ${props => props.as === 'button' && `
    background: rgba(255, 255, 255, 0.1); /* Fundo mais suave para o botão */
    border: 1px solid rgba(255, 255, 255, 0.4); /* Borda mais fina */
    cursor: pointer;

    &:hover {
      background: rgba(255, 255, 255, 0.3); /* Fundo mais escuro no hover */
      border-color: rgba(255, 255, 255, 0.6); /* Borda mais opaca */
    }
  `}

  @media (max-width: 768px) {
    font-size: 1rem; /* Ajuste para mobile */
    padding: 0.6rem 1.2rem; /* Ajuste de padding para mobile */
  }
`;

export const CartCountBadge = styled.span`
  background: linear-gradient(45deg, #ff4d4d, #ff8080); /* Vermelho mais vibrante */
  color: white;
  border-radius: 50%;
  width: 22px; /* Ligeiramente menor */
  height: 22px; /* Ligeiramente menor */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem; /* Texto menor */
  font-weight: 700;
  position: absolute;
  top: -6px; /* Ajusta posição */
  right: -6px; /* Ajusta posição */
  box-shadow: 0 2px 10px rgba(255, 77, 77, 0.5); /* Sombra mais intensa */
  animation: pulse 1.8s infinite ease-in-out; /* Animação mais suave */
  border: 2px solid rgba(255, 255, 255, 0.8); /* Borda mais definida */

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
    font-size: 0.65rem;
    top: -4px;
    right: -4px;
  }
`;