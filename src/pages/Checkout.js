import React from "react";
import { useCart } from "../context/CartContext";
import styled from "styled-components";
import { CognitoUserPool } from "amazon-cognito-identity-js";

// Replace with your actual Cognito values
const poolData = {
  UserPoolId: "us-east-1_cnCPBrOWT", // ← Replace this
  ClientId: "6r1uvr0t7urjn0a0rpso0d6ja2", // ← Replace this
};

const userPool = new CognitoUserPool(poolData);

const Checkout = () => {
  const { cart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const placeOrder = () => {
    const cognitoUser = userPool.getCurrentUser();

    if (!cognitoUser) {
      alert("User not logged in");
      return;
    }

    cognitoUser.getSession(async (err, session) => {
      if (err || !session.isValid()) {
        alert("Session expired. Please log in again.");
        return;
      }

      const idToken = session.getIdToken().getJwtToken();

      const res = await fetch(
        "https://zcmbj7jbd9.execute-api.us-east-1.amazonaws.com/prod/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: idToken,
          },
          body: JSON.stringify({
            items: cart,
            totalAmount: total,
          }),
        }
      );

      if (res.ok) {
        alert("Order placed successfully!");
        clearCart();
      } else {
        const error = await res.json();
        alert("Failed to place order: " + (error.message || "Unknown error"));
      }
    });
  };

  return (
    <Container>
      <h2>Order Summary</h2>
      {cart.map((item) => (
        <Item key={item.id}>
          {item.name} × {item.quantity} = $
          {(item.price * item.quantity).toFixed(2)}
        </Item>
      ))}
      <Total>Total: ${total.toFixed(2)}</Total>
      <Button onClick={placeOrder}>Place Order</Button>
    </Container>
  );
};

export default Checkout;

export const Container = styled.div`
  max-width: 600px;
  margin: 3rem auto;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  color: #2d3436;
  font-family: 'Inter', sans-serif;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2rem;
  font-size: 1rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px dashed #ccc;

  &:last-of-type {
    border-bottom: none;
  }
`;

export const Label = styled.span`
  font-weight: 500;
  color: #636e72;
`;

export const Value = styled.span`
  font-weight: 600;
  color: #2f3542;
`;

export const Total = styled.h2`
  margin-top: 2rem;
  text-align: right;
  font-size: 1.4rem;
  font-weight: 700;
  color: #00b894;
`;

export const Button = styled.button`
  margin-top: 2rem;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to right, #00b894, #00cec9);
  border: none;
  border-radius: 50px;
  font-size: 1.05rem;
  font-weight: 600;
  color: white;
  letter-spacing: 0.5px;
  box-shadow: 0 6px 20px rgba(0, 206, 201, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #00a87c, #00b9c5);
    box-shadow: 0 8px 30px rgba(0, 206, 201, 0.5);
    transform: translateY(-2px);
    cursor: pointer;
  }
`;