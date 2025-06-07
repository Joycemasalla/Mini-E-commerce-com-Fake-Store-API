// src/pages/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';

// Estilos para o componente de Registro (reutilizando muitos de Login.styles.js)
const RegisterContainer = styled.div`
  min-height: calc(100vh - 100px);
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
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
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    border-radius: 10px;
  }
`;

const RegisterTitle = styled.h2`
  margin-bottom: 2rem;
  color: #2c3e50;
  font-size: 2.2rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
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
    border-color: #4facfe;
    box-shadow: 0 0 0 0.3rem rgba(79, 172, 254, 0.25);
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
  background: linear-gradient(135deg, #604ffe 0%, #00f2fe 100%);
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  box-shadow: 0 8px 25px rgba(79, 172, 254, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(79, 172, 254, 0.6);
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
  color: #4facfe;
  text-decoration: none;
  font-weight: 700;
  margin-top: 1.5rem;
  display: block;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: #00f2fe;
    text-decoration: underline;
    transform: translateY(-1px);
  }
`;
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
            // Os dados da API Fake Store para registro são um pouco mais complexos.
            // Precisamos enviar um objeto com todos os campos esperados.
            const userToRegister = {
                email: formData.email,
                username: formData.username,
                password: formData.password,
                name: {
                    firstname: formData.name.firstname,
                    lastname: formData.name.lastname,
                },
                address: {
                    city: formData.address.city,
                    street: formData.address.street,
                    number: parseInt(formData.address.number), // Converter para número
                    zipcode: formData.address.zipcode,
                },
                phone: formData.phone,
            };

            // Endpoint de registro da Fake Store API
            const response = await axios.post('https://fakestoreapi.com/users', userToRegister);

            // A Fake Store API retorna o ID do novo usuário após o registro.
            // Para fins de demonstração, podemos considerar que o registro foi bem-sucedido.
            if (response.data.id) {
                toast.success(`Registro de "${formData.username}" simulado com sucesso! Use as credenciais de teste para login.`);
                navigate('/login'); // Redireciona para a página de login
            } else {
                toast.error('Falha na simulação de registro. Tente novamente.');
            }
        } catch (error) {
            toast.error('Erro ao simular o registro. Verifique os dados ou tente mais tarde.');
            console.error('Erro de registro:', error);
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
                        <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="username">Nome de Usuário:</Label>
                        <Input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Senha:</Label>
                        <Input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="firstname">Primeiro Nome:</Label>
                        <Input type="text" id="firstname" name="name.firstname" value={formData.name.firstname} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="lastname">Sobrenome:</Label>
                        <Input type="text" id="lastname" name="name.lastname" value={formData.name.lastname} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="phone">Telefone:</Label>
                        <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="city">Cidade:</Label>
                        <Input type="text" id="city" name="address.city" value={formData.address.city} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="street">Rua:</Label>
                        <Input type="text" id="street" name="address.street" value={formData.address.street} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="number">Número:</Label>
                        <Input type="number" id="number" name="address.number" value={formData.address.number} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="zipcode">CEP:</Label>
                        <Input type="text" id="zipcode" name="address.zipcode" value={formData.address.zipcode} onChange={handleChange} required />
                    </FormGroup>
                    <SubmitButton type="submit" disabled={loading}>
                        {loading ? 'Registrando...' : 'Registrar'}
                    </SubmitButton>
                </form>
                <SubmitButton to="/login">Já tem uma conta? Faça Login</SubmitButton>
            </RegisterFormCard>
        </RegisterContainer>
    );
}

export default Register;