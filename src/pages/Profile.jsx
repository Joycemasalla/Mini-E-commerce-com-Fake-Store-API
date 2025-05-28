// src/pages/Profile.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Estilos para o componente de Perfil
const ProfileContainer = styled.div`
  padding: 30px;
  max-width: 600px;
  margin: 30px auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  text-align: center;
`;

const ProfileTitle = styled.h2`
  margin-bottom: 30px;
  color: #333;
  font-size: 2.2em;
`;

const UserInfo = styled.div`
  text-align: left;
  margin-bottom: 25px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #fcfcfc;
`;

const InfoRow = styled.p`
  margin-bottom: 10px;
  font-size: 1.1em;
  color: #555;
  strong {
    color: #333;
  }
`;

const StyledLinkButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 25px;
  border-radius: 8px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.2em;
  color: #dc3545;
  padding: 20px;
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