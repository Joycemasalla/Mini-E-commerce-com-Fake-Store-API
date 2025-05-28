// src/pages/ProductDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    ProductDetailsContainer,
    BackButton,
    DetailsCard,
    ProductImage,
    InfoContainer,
    ProductTitle,
    ProductPrice,
    ProductDescription,
    ProductRating,
    AddToCartButton,
    Message
} from './ProductDetails.styles';

// Recebe addToCart como prop
function ProductDetails({ addToCart }) { // <-- Adicionado addToCart aqui
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
            } catch (err) {
                setError('Erro ao carregar os detalhes do produto. Ele pode não existir.');
                console.error('Erro ao buscar detalhes do produto:', err);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProductDetails();
        }
    }, [id]);

    if (loading) {
        return <div style={{ padding: '20px', textAlign: 'center' }}>Carregando detalhes do produto...</div>;
    }

    if (error) {
        return (
            <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
                {error}
                <br />
                <button onClick={() => navigate('/')} style={{ marginTop: '10px', padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Voltar para Produtos
                </button>
            </div>
        );
    }

    if (!product) {
        return <div style={{ padding: '20px', textAlign: 'center' }}>Produto não encontrado.</div>;
    }

    return (
        <ProductDetailsContainer>
            <BackButton onClick={() => navigate(-1)}>
                &larr; Voltar
            </BackButton>
            <DetailsCard>
                <ProductImage src={product.image} alt={product.title} />
                <InfoContainer>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
                    <ProductDescription>{product.description}</ProductDescription>
                    <ProductRating>
                        Avaliação: <strong>{product.rating.rate}</strong> ({product.rating.count} avaliações)
                    </ProductRating>
                    <AddToCartButton onClick={() => addToCart(product)}>
                        Adicionar ao Carrinho
                    </AddToCartButton>
                </InfoContainer>
            </DetailsCard>
        </ProductDetailsContainer>
    );
}
export default ProductDetails;