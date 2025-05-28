// src/pages/Home.styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomePageContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 20px auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

export const PageTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-size: 2.2em;
`;

export const FilterContainer = styled.div`
  margin-bottom: 30px;
  text-align: center;
  padding: 15px;
  background-color: #e9ecef;
  border-radius: 8px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
`;

export const FilterLabel = styled.label`
  margin-right: 15px;
  font-size: 1.1em;
  font-weight: bold;
  color: #333;
  display: inline-block;
  margin-bottom: 5px; /* Para telas menores */
`;

export const CategorySelect = styled.select`
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1em;
  min-width: 220px;
  cursor: pointer;
  background-color: #fff;
  appearance: none; /* Remove estilo padrão do sistema operacional */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 18px;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  justify-content: center;
  margin-top: 25px;
`;

export const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.15);
  }
`;

export const ProductImage = styled.img`
  max-width: 180px;
  max-height: 180px;
  object-fit: contain;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: #f8f8f8;
  padding: 5px;
`;

export const ProductTitle = styled.h3`
  font-size: 1.1em;
  font-weight: bold;
  min-height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 10px;
  color: #333;
`;

export const ProductPrice = styled.p`
  font-size: 1.4em;
  color: #28a745;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const DetailsButton = styled(Link)`
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-bottom: 10px;
  transition: background-color 0.2s ease-in-out;
  width: 90%;
  text-align: center;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`;

export const AddToCartButton = styled.button`
  background-color: #6f42c1; /* Um roxo diferente para destacar o carrinho */
  color: white;
  padding: 12px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: auto;
  transition: background-color 0.2s ease-in-out;
  width: 90%;
  font-weight: bold;

  &:hover {
    background-color: #5a2c99;
  }
`;

export const Message = styled.p`
  grid-column: 1 / -1;
  text-align: center;
  font-size: 1.2em;
  color: ${props => props.error ? 'red' : '#555'};
  padding: 20px;
`;