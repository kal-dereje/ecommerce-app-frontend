// src/components/CartItem/CartItem.styles.js
import styled from "styled-components";

export const Item = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr auto;
  align-items: center;
  gap: 1.5rem;
  background: #ffffff;
  border-left: 6px solid #6c5ce7;
  border-radius: 12px;
  padding: 1.5rem 1.2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3436;
  margin: 0;
`;

export const Quantity = styled.span`
  font-size: 0.9rem;
  color: #636e72;
  margin-top: 0.3rem;
`;

export const Price = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #00b894;
  margin-top: 0.4rem;
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RemoveBtn = styled.button`
  background: transparent;
  border: 2px solid #d63031;
  color: #d63031;
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #d63031;
    color: #fff;
  }
`;

export const EditQty = styled.button`
  background: #6c5ce7;
  color: white;
  border: none;
  font-size: 0.85rem;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #4b3ec9;
  }
`;
