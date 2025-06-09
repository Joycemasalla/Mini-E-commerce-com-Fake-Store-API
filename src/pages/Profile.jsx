// src/pages/Profile.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Estilos padronizados
const ProfilePageContainer = styled.div`
  min-height: calc(100vh - 100px);
  padding: 2rem;
  background-color: #f8f9fa;
`;

const PageTitle = styled.h1`
 font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;

  @media (max-width: 768px) {
    margin: 1rem;
    padding: 1.5rem;
  }
`;

const UserInfo = styled.div`
  margin-bottom: 2rem;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const InfoLabel = styled.span`
  font-weight: 600;
  color: #555;
  font-size: 1rem;
`;

const InfoValue = styled.span`
  color: #333;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-weight: 500;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BackButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    transform: translateY(1px);
  }
`;

const Message = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-size: 1.1rem;
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
    return (
      <ProfilePageContainer>
        <Message>Redirecionando para a página de login...</Message>
      </ProfilePageContainer>
    );
  }

  return (
    <ProfilePageContainer>
      <PageTitle>Meu Perfil</PageTitle>
      
      <ProfileContainer>
        <UserInfo>
          <InfoRow>
            <InfoLabel>Nome de Usuário:</InfoLabel>
            <InfoValue>{loggedInUser.username}</InfoValue>
          </InfoRow>
          
          <InfoRow>
            <InfoLabel>Nome Completo:</InfoLabel>
            <InfoValue>{loggedInUser.name}</InfoValue>
          </InfoRow>
          
          <InfoRow>
            <InfoLabel>Email:</InfoLabel>
            <InfoValue>{loggedInUser.email}</InfoValue>
          </InfoRow>
          
          {loggedInUser.phone && (
            <InfoRow>
              <InfoLabel>Telefone:</InfoLabel>
              <InfoValue>{loggedInUser.phone}</InfoValue>
            </InfoRow>
          )}
          
          {loggedInUser.address && (
            <InfoRow>
              <InfoLabel>Endereço:</InfoLabel>
              <InfoValue>
                {loggedInUser.address.street}, {loggedInUser.address.number} - {loggedInUser.address.city}
              </InfoValue>
            </InfoRow>
          )}
        </UserInfo>
        
        <ButtonContainer>
          <BackButton onClick={() => navigate('/')}>
            Voltar para a Loja
          </BackButton>
        </ButtonContainer>
      </ProfileContainer>
    </ProfilePageContainer>
  );
}

export default Profile;