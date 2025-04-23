// src/components/Header/Header.styles.js
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  color: #333;
  padding: 1rem 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: #2f3542;
  cursor: pointer;
  letter-spacing: 1px;
  transition: color 0.3s ease;

  &:hover {
    color: #57606f;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Button = styled.button`
  background: linear-gradient(to right, #74b9ff, #a29bfe);
  border: none;
  padding: 0.6rem 1.2rem;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #4a90e2, #7f8c8d);
  }
`;

export const CartCount = styled.span`
  background: #ff6b6b;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  font-size: 0.75rem;
  margin-left: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
`;