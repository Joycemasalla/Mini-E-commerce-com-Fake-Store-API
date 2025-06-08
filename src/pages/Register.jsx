// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';

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

// Estilos para o componente de Registro (usando as mesmas cores do Login)
const RegisterContainer = styled.div`
  min-height: calc(100vh - 100px);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
`;

const RegisterFormCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 3rem 2.5rem;
  border-radius: 25px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 550px;
  max-height: 90vh;
  overflow-y: auto;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.3);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 20px;
    max-height: 95vh;
  }

  /* Scrollbar personalizada */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 10px;
  }
`;

const RegisterTitle = styled.h2`
  margin-bottom: 2rem;
  color: #2c3e50;
  font-size: 2.2rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.2rem;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #34495e;
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 0.95rem;
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
  font-size: 1.1rem;
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

const StyledLink = styled(Link)`
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

// Função para simular delay de requisição
const simulateApiDelay = (ms = 1000) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Função para validar dados do formulário
const validateFormData = (formData) => {
  const errors = [];

  if (!formData.email || !formData.email.includes('@')) {
    errors.push('Email deve ser válido');
  }

  if (!formData.username || formData.username.length < 3) {
    errors.push('Nome de usuário deve ter pelo menos 3 caracteres');
  }

  if (!formData.password || formData.password.length < 6) {
    errors.push('Senha deve ter pelo menos 6 caracteres');
  }

  if (!formData.name.firstname || formData.name.firstname.length < 2) {
    errors.push('Primeiro nome deve ter pelo menos 2 caracteres');
  }

  if (!formData.name.lastname || formData.name.lastname.length < 2) {
    errors.push('Sobrenome deve ter pelo menos 2 caracteres');
  }

  if (!formData.phone || formData.phone.length < 10) {
    errors.push('Telefone deve ter pelo menos 10 dígitos');
  }

  if (!formData.address.city || formData.address.city.length < 2) {
    errors.push('Cidade deve ter pelo menos 2 caracteres');
  }

  if (!formData.address.street || formData.address.street.length < 3) {
    errors.push('Rua deve ter pelo menos 3 caracteres');
  }

  if (!formData.address.number || isNaN(formData.address.number)) {
    errors.push('Número deve ser um valor numérico');
  }

  if (!formData.address.zipcode || formData.address.zipcode.length < 5) {
    errors.push('CEP deve ter pelo menos 5 caracteres');
  }

  return errors;
};

function Register() {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        name: {
            firstname: '',
            lastname: '',
        },
        address: {
            city: '',
            street: '',
            number: '',
            zipcode: '',
        },
        phone: '',
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Lida com campos aninhados como name.firstname, address.city
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData((prevData) => ({
                ...prevData,
                [parent]: {
                    ...prevData[parent],
                    [child]: value,
                },
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Validar dados do formulário
            const validationErrors = validateFormData(formData);
            if (validationErrors.length > 0) {
                showToast(`Erro de validação: ${validationErrors[0]}`, 'error');
                console.log('Erros de validação:', validationErrors);
                setLoading(false);
                return;
            }

            // Simula delay da API
            await simulateApiDelay(1200);

            // Verificar se o usuário já existe (simulação)
            const existingUsernames = ['johnd', 'mor_2314', 'kevinryan', 'admin', 'test'];
            if (existingUsernames.includes(formData.username.toLowerCase())) {
                showToast('Este nome de usuário já está em uso. Escolha outro.', 'error');
                console.log('Username já existe:', formData.username);
                setLoading(false);
                return;
            }

            // Simular criação do usuário
            const newUser = {
                id: Math.floor(Math.random() * 1000) + 100, // ID aleatório
                email: formData.email,
                username: formData.username,
                password: formData.password, // Em produção, nunca armazenar senha em texto claro
                name: {
                    firstname: formData.name.firstname,
                    lastname: formData.name.lastname,
                },
                address: {
                    city: formData.address.city,
                    street: formData.address.street,
                    number: parseInt(formData.address.number),
                    zipcode: formData.address.zipcode,
                },
                phone: formData.phone,
            };

            console.log('✅ Usuário criado com sucesso:', newUser);
            showToast(
                `🎉 Conta criada com sucesso para "${formData.name.firstname} ${formData.name.lastname}"! Use as credenciais de teste para fazer login.`,
                'success'
            );

            // Aguardar um pouco para mostrar a mensagem de sucesso
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Redirecionar para a página de login
            navigate('/login');

        } catch (error) {
            console.error('Erro de registro:', error);
            showToast('Erro interno do servidor. Tente novamente mais tarde.', 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <RegisterContainer>
            <RegisterFormCard>
                <RegisterTitle>Criar Nova Conta</RegisterTitle>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="email">Email:</Label>
                        <Input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            placeholder="seu@email.com"
                            required 
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label htmlFor="username">Nome de Usuário:</Label>
                        <Input 
                            type="text" 
                            id="username" 
                            name="username" 
                            value={formData.username} 
                            onChange={handleChange} 
                            placeholder="Mínimo 3 caracteres"
                            required 
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label htmlFor="password">Senha:</Label>
                        <Input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            placeholder="Mínimo 6 caracteres"
                            required 
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label htmlFor="firstname">Primeiro Nome:</Label>
                        <Input 
                            type="text" 
                            id="firstname" 
                            name="name.firstname" 
                            value={formData.name.firstname} 
                            onChange={handleChange} 
                            placeholder="João"
                            required 
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label htmlFor="lastname">Sobrenome:</Label>
                        <Input 
                            type="text" 
                            id="lastname" 
                            name="name.lastname" 
                            value={formData.name.lastname} 
                            onChange={handleChange} 
                            placeholder="Silva"
                            required 
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label htmlFor="phone">Telefone:</Label>
                        <Input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            placeholder="(11) 99999-9999"
                            required 
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label htmlFor="city">Cidade:</Label>
                        <Input 
                            type="text" 
                            id="city" 
                            name="address.city" 
                            value={formData.address.city} 
                            onChange={handleChange} 
                            placeholder="São Paulo"
                            required 
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label htmlFor="street">Rua:</Label>
                        <Input 
                            type="text" 
                            id="street" 
                            name="address.street" 
                            value={formData.address.street} 
                            onChange={handleChange} 
                            placeholder="Rua das Flores"
                            required 
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label htmlFor="number">Número:</Label>
                        <Input 
                            type="number" 
                            id="number" 
                            name="address.number" 
                            value={formData.address.number} 
                            onChange={handleChange} 
                            placeholder="123"
                            required 
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label htmlFor="zipcode">CEP:</Label>
                        <Input 
                            type="text" 
                            id="zipcode" 
                            name="address.zipcode" 
                            value={formData.address.zipcode} 
                            onChange={handleChange} 
                            placeholder="01234-567"
                            required 
                        />
                    </FormGroup>
                    
                    <SubmitButton type="submit" disabled={loading}>
                        {loading ? 'Criando Conta...' : 'Criar Conta'}
                    </SubmitButton>
                </form>
                
                <div style={{ 
                    marginTop: '20px', 
                    fontSize: '0.85em', 
                    color: '#666',
                    textAlign: 'center',
                    background: '#f8f9fa', 
                    padding: '15px', 
                    borderRadius: '10px',
                    border: '1px solid #e9ecef'
                }}>
                    <strong>ℹ️ Nota:</strong> Esta é uma simulação de registro.
                    <br />
                    Para fazer login, use as credenciais de teste na página de login.
                    <br />
                   
                </div>
                
                <StyledLink to="/login">Já tem uma conta? Faça Login</StyledLink>
            </RegisterFormCard>
        </RegisterContainer>
    );
}

export default Register;