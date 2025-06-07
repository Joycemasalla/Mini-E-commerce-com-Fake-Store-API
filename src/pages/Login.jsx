// src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { StyledLink } from '../components/Header.styles';

// Estilos para o componente de Login
const LoginContainer = styled.div`
  min-height: calc(100vh - 100px);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
`;

const LoginFormCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 3rem 2.5rem;
  border-radius: 25px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 450px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.3);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 20px;
  }
`;

const LoginTitle = styled.h2`
  margin-bottom: 2rem;
  color: #2c3e50;
  font-size: 2.5rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #34495e;
  font-size: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  border: 2px solid #e9ecef;
  border-radius: 15px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8f9fa;
  box-sizing: border-box;

  &:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 0.3rem rgba(102, 126, 234, 0.25);
    outline: none;
    background: white;
    transform: translateY(-1px);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const RegisterButton = styled(StyledLink)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #aea1be 0%, #b3abd8 100%);
  color: #ffffff;
  border-radius: 50px;
  font-weight: 600;
  text-align: center;
  margin-top: 0.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 1rem;
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
                <RegisterButton to="/register">Não tem uma conta? Cadastre-se</RegisterButton>

            </LoginFormCard>
        </LoginContainer>
    );
}

export default Login;