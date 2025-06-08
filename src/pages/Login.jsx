// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { StyledLink } from '../components/Header.styles';

// Configuração do toast para garantir que funcione
const showToast = (message, type = 'info') => {
  try {
    if (type === 'success') {
      toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if (type === 'error') {
      toast.error(message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  } catch (error) {
    // Fallback para alert se o toast não funcionar
    alert(`${type.toUpperCase()}: ${message}`);
  }
};

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
  color: #667eea;
  text-decoration: none;
  font-weight: 700;
  margin-top: 1.5rem;
  display: block;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: #764ba2;
    text-decoration: underline;
    transform: translateY(-1px);
  }
`;

// Usuários de teste simulados
const testUsers = {
  'johnd': {
    password: 'm38rmF$',
    userData: {
      id: 1,
      username: 'johnd',
      email: 'john@gmail.com',
      name: 'John Doe',
      phone: '1-570-236-7033',
      address: {
        city: 'Kilcoole',
        street: '7835 new road',
        number: 3,
        zipcode: '12926-3874'
      }
    }
  },
  'mor_2314': {
    password: '83r5^_',
    userData: {
      id: 2,
      username: 'mor_2314',
      email: 'morrison@gmail.com',
      name: 'David Morrison',
      phone: '1-570-236-7033',
      address: {
        city: 'Kilcoole',
        street: '7267 new road',
        number: 11,
        zipcode: '12926-3874'
      }
    }
  },
  'kevinryan': {
    password: 'kev02937@',
    userData: {
      id: 3,
      username: 'kevinryan',
      email: 'kevin@gmail.com',
      name: 'Kevin Ryan',
      phone: '1-567-094-1345',
      address: {
        city: 'Cullman',
        street: '86 Frances Ct',
        number: 9,
        zipcode: '29567-1452'
      }
    }
  }
};

// Função para simular delay de requisição
const simulateApiDelay = (ms = 1000) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

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
            // Simula delay da API
            await simulateApiDelay(800);

            // Verifica se o usuário existe e a senha está correta
            const user = testUsers[username];
            
            if (!user) {
                console.log('Usuário não encontrado:', username);
                showToast('Usuário não encontrado. Verifique suas credenciais.', 'error');
                setLoading(false);
                return;
            }

            if (user.password !== password) {
                console.log('Senha incorreta para usuário:', username);
                showToast('Senha incorreta. Tente novamente.', 'error');
                setLoading(false);
                return;
            }

            // Simula token JWT (normalmente viria do backend)
            const simulatedToken = `fake-jwt-token-${Date.now()}`;
            
            // Login bem-sucedido
            console.log('Login bem-sucedido para:', user.userData.name);
            showToast(`Bem-vindo, ${user.userData.name}! Login realizado com sucesso.`, 'success');
            
            // Chama a função onLogin do App.jsx
            onLogin(simulatedToken, user.userData);
            
            // Redireciona para a página inicial
            navigate('/');
            
        } catch (error) {
            console.error('Erro de login:', error);
            showToast('Erro interno do servidor. Tente novamente mais tarde.', 'error');
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
                            placeholder="Digite seu usuário"
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
                            placeholder="Digite sua senha"
                            required
                        />
                    </FormGroup>
                    <SubmitButton type="submit" disabled={loading}>
                        {loading ? 'Entrando...' : 'Entrar'}
                    </SubmitButton>
                </form>
                
                <div style={{ 
                    marginTop: '20px', 
                    fontSize: '0.9em', 
                    color: '#666',
                    textAlign: 'left',
                    background: '#f8f9fa', 
                    padding: '15px', 
                    borderRadius: '10px',
                    border: '1px solid #e9ecef'
                }}>
                    <strong>👤 Credenciais de Teste:</strong>
                    <br />
                    <div style={{ marginTop: '8px' }}>
                        <strong>Usuário:</strong> johnd | <strong>Senha:</strong> m38rmF$
                    </div>
                    <div style={{ marginTop: '5px' }}>
                        <strong>Usuário:</strong> mor_2314 | <strong>Senha:</strong> 83r5^_
                    </div>
                    <div style={{ marginTop: '5px' }}>
                        <strong>Usuário:</strong> kevinryan | <strong>Senha:</strong> kev02937@
                    </div>
                   
                </div>
                
                <RegisterButton to="/register">
                    Não tem uma conta? Cadastre-se
                </RegisterButton>
            </LoginFormCard>
        </LoginContainer>
    );
}

export default Login;