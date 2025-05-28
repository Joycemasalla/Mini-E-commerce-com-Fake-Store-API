// src/pages/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';

// Estilos para o componente de Registro (reutilizando muitos de Login.styles.js)
const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px); /* Ajuste com base na altura do Header */
  background-color: #f0f2f5;
`;

const RegisterFormCard = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 500px; /* Um pouco maior para mais campos */
  text-align: center;
`;

const RegisterTitle = styled.h2`
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
    border-color: #28a745; /* Cor de foco diferente para registro */
    box-shadow: 0 0 0 0.2rem rgba(40,167,69,.25);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #28a745; /* Cor verde para registro */
  color: white;
  border-radius: 8px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 20px;

  &:hover {
    background-color: #218838;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  margin-top: 20px;
  display: block;

  &:hover {
    text-decoration: underline;
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
                <StyledLink to="/login">Já tem uma conta? Faça Login</StyledLink>
            </RegisterFormCard>
        </RegisterContainer>
    );
}

export default Register;