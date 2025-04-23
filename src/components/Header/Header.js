// src/components/Header/Header.js
import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Container, Logo, Nav, Button, CartCount } from "./Header.styles";
import styled from "styled-components";

const Header = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <Container>
      <Logo onClick={() => navigate("/")}>⭐ KalEyoMart</Logo>
      <Nav>
        <Button onClick={() => navigate("/")}>Home</Button>
        <Button onClick={() => navigate("/cart")}>
          Cart{" "}
          <CartCount>
            {cart.reduce((acc, item) => acc + item.quantity, 0)}
          </CartCount>
        </Button>
        {user ? (
          <>
             <UserBadge>
      <div className="avatar">{user?.name?.[0]?.toUpperCase() || "U"}</div>
      <span>{user?.name || "Guest"}</span>
    </UserBadge>
            <Button onClick={logout}>Logout</Button>
          </>
        ) : (
          <Button onClick={() => navigate("/login")}>Login</Button>
        )}
      </Nav>
    </Container>
  );
};

 const UserBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: #f0f4f8;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  font-weight: 500;
  font-size: 0.95rem;
  color: #2d3436;
  box-shadow: inset 0 0 0 1px #dfe6e9;

  .avatar {
    width: 32px;
    height: 32px;
    background-color: #74b9ff;
    color: white;
    border-radius: 50%;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
  }
`;
export default Header;
