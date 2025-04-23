// src/components/ProductCard/ProductCard.styles.js
import styled from "styled-components";

export const Card = styled.div`
  background: #fefefe;
  border-radius: 16px;
  padding: 1.5rem;
  width: 260px;
  text-align: left;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  color: #2d3436;
  margin: 0.5rem 0;
  font-weight: 600;
`;

export const Price = styled.p`
  font-size: 1.1rem;
  color: #10ac84;
  margin: 0.3rem 0 1rem;
  font-weight: 500;
`;

export const Button = styled.button`
  background: #1e90ff;
  color: #fff;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: background 0.3s ease;
  width: 100%;

  &:hover {
    background: #0c70d4;
  }
`;
