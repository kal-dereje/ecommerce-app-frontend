// src/components/SearchBar/SearchBar.styles.js
import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;
  background-color: #f9fafb;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 600px;
  padding: 0.85rem 1.2rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(100, 149, 237, 0.3);
  }
`;
