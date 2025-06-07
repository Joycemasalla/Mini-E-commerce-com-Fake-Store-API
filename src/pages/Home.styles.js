// Home.styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomePageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  animation: fadeIn 0.8s ease-out;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`;

export const FilterLabel = styled.label`
  font-weight: 600;
  color: #4a5568;
  font-size: 1.1rem;
`;

export const CategorySelect = styled.select`
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  background: white;
  border: 2px solid #e2e8f0;
  font-size: 1rem;
  font-weight: 500;
  color: #4a5568;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: 200px;

  &:hover {
    border-color: #667eea;
    box-shadow: 0 4px 20px rgba(102, 126, 234, 0.15);
  }

  &:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  option {
    padding: 0.5rem;
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const ProductCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.6s;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(102, 126, 234, 0.3);

    &::before {
      left: 100%;
    }
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
  border-radius: 15px;
  margin-bottom: 1rem;
  background: #f8fafc;
  padding: 1rem;
  transition: transform 0.3s ease;

  ${ProductCard}:hover & {
    transform: scale(1.05);
  }
`;

export const ProductTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 1.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const DetailsButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e0 100%);
  color: #4a5568;
  border-radius: 50px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(135deg, #cbd5e0 0%, #a0aec0 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const AddToCartButton = styled.button`
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
    background: linear-gradient(135deg, #5a67d8 0%, #68d391 100%);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const Message = styled.div`
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: #718096;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  grid-column: 1 / -1;
`;