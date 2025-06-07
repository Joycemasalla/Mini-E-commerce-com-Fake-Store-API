// src/pages/Profile.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Estilos para o componente de Perfil
const ProfileContainer = styled.div`
  min-height: calc(100vh - 100px);
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 25px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  width: 100%;
  max-width: 600px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.3);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 20px;
  }
`;

const ProfileTitle = styled.h2`
  margin-bottom: 2rem;
  color: #2c3e50;
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const UserInfo = styled.div`
  text-align: left;
  margin-bottom: 2rem;
  padding: 2rem;
  border: 2px solid #f093fb;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(240, 147, 251, 0.1) 0%, rgba(245, 87, 108, 0.1) 100%);
`;

const InfoRow = styled.p`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: #555;
  padding: 0.8rem;
  border-radius: 10px;
  background: rgba(255,255,255,0.7);
  border-left: 4px solid #f5576c;
  
  strong {
    color: #2c3e50;
    font-weight: 700;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledLinkButton = styled.button`
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.2rem 2.5rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(240, 147, 251, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(240, 147, 251, 0.6);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #e74c3c;
  padding: 2rem;
  background: rgba(255,255,255,0.9);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

// Componente Profile
function Profile({ loggedInUser, authToken }) {
  const navigate = useNavigate();

  // Redireciona se não houver usuário logado ou token
  useEffect(() => {
    if (!loggedInUser || !authToken) {
      navigate('/login');
    }
  }, [loggedInUser, authToken, navigate]);

  if (!loggedInUser) {
    return <Message>Redirecionando para a página de login...</Message>;
  }

  return (
    <ProfileContainer>
      <ProfileTitle>Meu Perfil</ProfileTitle>
      <UserInfo>
        <InfoRow><strong>Nome de Usuário:</strong> {loggedInUser.username}</InfoRow>
        <InfoRow><strong>Nome Completo:</strong> {loggedInUser.name}</InfoRow>
        <InfoRow><strong>Email:</strong> {loggedInUser.email}</InfoRow>
        {/* Você pode exibir outras informações do usuário aqui, como endereço, telefone etc.
            Se a Fake Store API as fornecer e você as buscar. */}
      </UserInfo>
      <StyledLinkButton onClick={() => navigate('/')}>Voltar para a Loja</StyledLinkButton>
    </ProfileContainer>
  );
}

export default Profile;