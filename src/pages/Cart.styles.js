// src/pages/Cart.styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 120px);
  background: #f8fafc;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  transition: all 0.2s ease;

  &:hover {
    background: #dbeafe;
    border-color: #93c5fd;
    transform: translateX(-2px);
  }

  @media (max-width: 768px) {
    order: 3;
    width: 100%;
    justify-content: center;
  }
`;

export const CartTitle = styled.h1`
  color: #1e293b;
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: -0.025em;

  @media (max-width: 768px) {
    font-size: 2rem;
    order: 1;
  }
`;

export const ItemsCount = styled.div`
  background: #10b981;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    order: 2;
  }
`;

export const EmptyCartMessage = styled.div`
  text-align: center;
  background: white;
  padding: 4rem 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 500px;

  .empty-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    opacity: 0.5;
  }

  h2 {
    color: #374151;
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    color: #6b7280;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

export const ContinueShoppingButton = styled(Link)`
  display: inline-block;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px 0 rgba(59, 130, 246, 0.5);
    color: white;
  }
`;

export const CartContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const CartItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartItemCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  gap: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border-color: #d1d5db;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1.25rem;
  }
`;

export const CartItemImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 12px;
  background: #f9fafb;
  padding: 1rem;
  border: 1px solid #f3f4f6;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
`;

export const CartItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .item-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  .item-subtotal {
    color: #374151;
    font-size: 1rem;
    margin-top: auto;
    
    strong {
      color: #059669;
      font-weight: 700;
    }
  }
`;

export const CartItemTitle = styled.h3`
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CartItemPrice = styled.div`
  color: #dc2626;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  background: #f3f4f6;
  border-radius: 12px;
  padding: 0.25rem;
  border: 1px solid #e5e7eb;
`;

export const QuantityButton = styled.button`
  background: ${props => props.disabled ? '#e5e7eb' : '#3b82f6'};
  color: ${props => props.disabled ? '#9ca3af' : 'white'};
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background: #2563eb;
    transform: scale(1.05);
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }
`;

export const QuantityDisplay = styled.span`
  min-width: 40px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  color: #374151;
  padding: 0 0.5rem;
`;

export const RemoveButton = styled.button`
  background: #fef2f2;
  color: #dc2626;
  border: 1px solid #fecaca;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #fee2e2;
    border-color: #fca5a5;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const CartSummary = styled.div`
  position: sticky;
  top: 2rem;
  height: fit-content;

  @media (max-width: 1024px) {
    position: static;
  }
`;

export const OrderSummaryCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;

  .shipping-message {
    background: #dcfce7;
    color: #166534;
    padding: 0.75rem;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    text-align: center;
    margin: 1rem 0;
  }

  .secure-checkout {
    text-align: center;
    color: #6b7280;
    font-size: 0.9rem;
    margin-top: 1rem;
  }
`;

export const SummaryTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 1.5rem 0;
  text-align: center;
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  font-size: 1rem;
  border-bottom: 1px solid #f3f4f6;

  &:last-of-type {
    border-bottom: 2px solid #e5e7eb;
    margin-bottom: 1rem;
  }

  span:first-child {
    color: #6b7280;
    font-weight: 500;
  }

  span:last-child {
    color: #1f2937;
    font-weight: 600;
    
    &.free-shipping {
      color: #059669;
      font-weight: 700;
    }
  }
`;

export const SummaryActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TotalText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 800;
  color: #1f2937;
  padding: 1rem 0;
  border-top: 2px solid #e5e7eb;
  margin-top: 1rem;

  span:last-child {
    color: #059669;
  }
`;

export const CheckoutButton = styled.button`
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: white;
  padding: 1.25rem 2rem;
  border-radius: 12px;
  border: none;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px 0 rgba(5, 150, 105, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px 0 rgba(5, 150, 105, 0.5);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;