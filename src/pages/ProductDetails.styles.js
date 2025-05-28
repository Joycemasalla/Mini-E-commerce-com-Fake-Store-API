// src/pages/ProductDetails.styles.js
import styled from 'styled-components';

export const ProductDetailsContainer = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 20px auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

export const BackButton = styled.button`
  background-color: #6c757d;
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-bottom: 25px;
  font-size: 1em;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #5a6268;
  }
`;

export const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ProductImage = styled.img`
  max-width: 320px;
  max-height: 320px;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid #eee;
  padding: 15px;
  background-color: #fcfcfc;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`;

export const InfoContainer = styled.div`
  flex: 1;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const ProductTitle = styled.h2`
  font-size: 2.2em;
  margin-bottom: 15px;
  color: #333;
`;

export const ProductPrice = styled.p`
  font-size: 1.8em;
  color: #28a745;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ProductDescription = styled.p`
  font-size: 1.1em;
  line-height: 1.8;
  color: #555;
  margin-bottom: 25px;
`;

export const ProductRating = styled.p`
  font-size: 1em;
  color: #666;
  margin-bottom: 30px;
  strong {
    color: #007bff;
  }
`;

export const AddToCartButton = styled.button`
  background-color: #6f42c1; /* Cor de carrinho */
  color: white;
  padding: 15px 25px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: bold;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #5a2c99;
  }
`;

export const Message = styled.p`
  text-align: center;
  font-size: 1.2em;
  color: ${props => props.error ? 'red' : '#555'};
  padding: 20px;
`;