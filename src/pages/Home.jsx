// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  HomePageContainer,
  PageTitle,
  FilterContainer,
  FilterLabel,
  CategorySelect,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
  DetailsButton,
  AddToCartButton,
  Message
} from './Home.styles';

// Recebe addToCart como prop
function Home({ addToCart }) { // <-- Adicionado addToCart aqui
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        let url = 'https://fakestoreapi.com/products';
        if (selectedCategory !== 'all') {
          url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
        }

        const response = await axios.get(url);
        setProducts(response.data);
      } catch (err) {
        setError('Erro ao carregar os produtos. Tente novamente mais tarde.');
        console.error('Erro ao buscar produtos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data);
      } catch (err) {
        console.error('Erro ao buscar categorias:', err);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Carregando produtos...</div>;
  }

  if (error) {
    return <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>{error}</div>;
  }

  return (
    <HomePageContainer>
      <PageTitle>Nossos Produtos</PageTitle>

      <FilterContainer>
        <FilterLabel htmlFor="category-select">Filtrar por Categoria:</FilterLabel>
        <CategorySelect
          id="category-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="all">Todas as Categorias</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </CategorySelect>
      </FilterContainer>

      <ProductsGrid>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.title} />
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
              <DetailsButton to={`/produto/${product.id}`}>
                Ver detalhes
              </DetailsButton>
              <AddToCartButton onClick={() => addToCart(product)}>
                Adicionar ao Carrinho
              </AddToCartButton>
            </ProductCard>
          ))
        ) : (
          <Message>Nenhum produto encontrado para esta categoria.</Message>
        )}
      </ProductsGrid>
    </HomePageContainer>
  );
}

export default Home;