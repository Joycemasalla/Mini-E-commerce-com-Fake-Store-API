// src/pages/ProductDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; //
import axios from 'axios'; //
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
} from './ProductDetails.styles'; //

// Recebe addToCart e loggedInUser como prop do App.jsx
function ProductDetails({ addToCart, loggedInUser }) { //
    const { id } = useParams(); //
    const navigate = useNavigate(); //

    const [product, setProduct] = useState(null); //
    const [loading, setLoading] = useState(true); //
    const [error, setError] = useState(null); //

  
    // Efeito para buscar detalhes do produto: Só busca se estiver logado e tiver ID
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
        if (id ) {
            fetchProductDetails();
        }
    }, [id]); 


    if (loading) {
        return <Message>Carregando detalhes do produto...</Message>;
    }

    if (error) {
        return (
            <Message error>
                {error}
                <br />
                <BackButton onClick={() => navigate('/')} style={{ marginTop: '20px' }}>
                    Voltar para Produtos
                </BackButton>
            </Message>
        );
    }

    if (!product) {
        return <Message>Produto não encontrado.</Message>;
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