// src/pages/Cart.js
import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem/CartItem";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <Container>
      <h2>Your Cart</h2>
      {cart && (
        <>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              <Summary>
                <p>
                  <strong>Total:</strong> ${total.toFixed(2)}
                </p>
                <Button onClick={() => navigate("/checkout")}>
                  Proceed to Checkout
                </Button>
                <Button secondary onClick={clearCart}>
                  Clear Cart
                </Button>
              </Summary>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default Cart;



export const Container = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.05);
  z-index: 999;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: #2d3436;

  span {
    font-weight: 600;
    color: #00b894;
  }
`;

export const Button = styled.button`
  background: ${({ secondary }) => (secondary ? "#dfe6e9" : "#0984e3")};
  color: ${({ secondary }) => (secondary ? "#2d3436" : "#ffffff")};
  border: none;
  padding: 0.7rem 1.4rem;
  margin-left: 1rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ secondary }) => (secondary ? "#b2bec3" : "#0652dd")};
    color: white;
  }
`;
