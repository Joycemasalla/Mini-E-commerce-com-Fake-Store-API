// src/pages/Cart.styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartContainer = styled.div`
  padding: 25px;
  max-width: 900px;
  margin: 20px auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

export const CartTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-size: 2.2em;
`;

export const EmptyCartMessage = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 1.2em;
  color: #555;
`;

export const ContinueShoppingButton = styled(Link)`
  background-color: #007bff;
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 25px;
  display: inline-block;
  font-weight: bold;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CartItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

export const CartItemCard = styled.div`
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  flex-direction: column;
  text-align: center;

  @media (min-width: 600px) {
    flex-direction: row;
    text-align: left;
  }
`;

export const CartItemImage = styled.img`
  width: 90px;
  height: 90px;
  object-fit: contain;
  margin-right: 20px;
  border-radius: 4px;
  margin-bottom: 15px;

  @media (min-width: 600px) {
      margin-bottom: 0;
  }
`;

export const CartItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
      align-items: flex-start;
  }
`;

export const CartItemTitle = styled.h3`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
`;

export const CartItemPrice = styled.p`
  font-size: 1.1em;
  color: #555;
  margin-bottom: 10px;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 8px;
`;

export const QuantityButton = styled.button`
  background-color: #e9ecef;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #dee2e6;
  }
`;

export const QuantityDisplay = styled.span`
  padding: 0 10px;
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
`;

export const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 0.95em;
  font-weight: bold;
  margin-top: 15px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #c82333;
  }

  @media (min-width: 600px) {
      margin-top: 0;
      margin-left: auto;
  }
`;

export const CartSummary = styled.div`
  border-top: 2px solid #eee;
  padding-top: 25px;
  text-align: right;
`;

export const TotalText = styled.h3`
  font-size: 1.8em;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

export const CheckoutButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 18px 35px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1.3em;
  font-weight: bold;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #218838;
  }
`;