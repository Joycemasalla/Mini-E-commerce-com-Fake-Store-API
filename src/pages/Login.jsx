// src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { StyledLink } from '../components/Header.styles';

// Estilos para o componente de Login
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px); /* Ajuste com base na altura do Header */
  background-color: #f0f2f5;
`;

const LoginFormCard = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const LoginTitle = styled.h2`
  margin-bottom: 30px;
  color: #333;
  font-size: 2em;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  width: calc(100% - 20px); /* Ajusta o padding */
  padding: 12px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #007bff;
  color: white;
  border-radius: 8px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

// Componente Login
function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Endpoint de login da Fake Store API
            const response = await axios.post('https://fakestoreapi.com/auth/login', {
                username,
                password,
            });

            const token = response.data.token;

            // Exemplo de como obter dados do usuário após o login (requer outra chamada)
            // A Fake Store API não retorna o objeto do usuário completo no login.
            // Para simular, vamos buscar o usuário por ID.
            // Nota: Para este exemplo, estamos assumindo um ID de usuário fixo para fins de demonstração
            // Você precisaria de um backend real para mapear tokens para usuários.
            // A Fake Store API permite buscar usuários por ID, então faremos uma segunda chamada.
            // Usuários de teste da Fake Store API:
            // username: johnd, password: m38rmF$ (ID: 1)
            // username: mor_2314, password: 83r5^_ (ID: 2)
            // etc.

            // Para simplificar, vamos usar o ID 1 para o usuário 'johnd' e 2 para 'mor_2314'
            let userId;
            if (username === 'johnd') {
                userId = 1;
            } else if (username === 'mor_2314') {
                userId = 2;
            } else {
                // Caso de usuários inválidos, ou pode-se deixar sem buscar dados do usuário
                // para simplificar, apenas use o token.
                // Para a Fake Store API, é preciso um ID conhecido para buscar o usuário.
                toast.error('Usuário de teste não reconhecido para buscar dados de perfil.');
                setLoading(false);
                return;
            }


            const userResponse = await axios.get(`https://fakestoreapi.com/users/${userId}`);
            const userData = {
                id: userResponse.data.id,
                username: userResponse.data.username,
                email: userResponse.data.email,
                name: `${userResponse.data.name.firstname} ${userResponse.data.name.lastname}`,
                // Adicione outras informações que desejar exibir no perfil
            };

            onLogin(token, userData); // Chama a função onLogin do App.jsx
            navigate('/'); // Redireciona para a página inicial
        } catch (error) {
            toast.error('Credenciais inválidas. Verifique seu nome de usuário e senha.');
            console.error('Erro de login:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <LoginContainer>
            <LoginFormCard>
                <LoginTitle>Faça Login</LoginTitle>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="username">Usuário:</Label>
                        <Input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Senha:</Label>
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </FormGroup>
                    <SubmitButton type="submit" disabled={loading}>
                        {loading ? 'Entrando...' : 'Entrar'}
                    </SubmitButton>
                </form>
                <p style={{ marginTop: '20px', fontSize: '0.9em', color: '#666' }}>
                    Use as credenciais de teste da Fake Store API:
                    <br /> <strong>Usuário: johnd</strong> | <strong>Senha: m38rmF$</strong>
                    <br /> <strong>Usuário: mor_2314</strong> | <strong>Senha: 83r5^_</strong>
                </p>
                <StyledLink to="/register">Não tem uma conta? Cadastre-se</StyledLink>

            </LoginFormCard>
        </LoginContainer>
    );
}

export default Login;