// ProductDetails.styles.js
import styled from 'styled-components';

export const ProductDetailsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  animation: fadeIn 0.8s ease-out;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  color: #4a5568;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: white;
    transform: translateX(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateX(-2px);
  }
`;

export const DetailsCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  animation: fadeIn 0.8s ease-out;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  max-height: 500px;
  object-fit: contain;
  border-radius: 20px;
  background: #f8fafc;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease;
  justify-self: center;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-height: 300px;
    padding: 1rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
`;

export const ProductTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #2d3748;
  line-height: 1.2;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ProductPrice = styled.div`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const ProductDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  text-align: justify;
  padding: 1.5rem;
  background: rgba(248, 250, 252, 0.8);
  border-radius: 15px;
  border-left: 4px solid #667eea;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #fef5e7 0%, #fed7aa 100%);
  border-radius: 15px;
  font-weight: 600;
  color: #9c4221;
  border: 1px solid rgba(251, 191, 36, 0.3);
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(251, 191, 36, 0.15);

  strong {
    font-size: 1.2rem;
    color: #92400e;
  }

  &::before {
    content: '⭐';
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
`;

export const AddToCartButton = styled.button`
  padding: 1.25rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 60px;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  margin-top: auto;
  align-self: stretch;

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

  &::after {
    content: '🛒';
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.3rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.6);
    background: linear-gradient(135deg, #5a67d8 0%, #68d391 100%);

    &::before {
      left: 100%;
    }

    &::after {
      transform: translateY(-50%) scale(1.2);
    }
  }

  &:active {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    font-size: 1rem;
    
    &::after {
      right: 1rem;
      font-size: 1.1rem;
    }
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
  margin: 2rem 0;
`;