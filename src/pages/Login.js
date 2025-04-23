// src/pages/Login.js
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import styled from "styled-components";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f6f9fc, #e9eff5);
  padding: 2rem;
`;

const Form = styled.form`
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
  border-radius: 16px;
  padding: 2.5rem;
  width: 100%;
  max-width: 420px;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 10px;
  padding: 0.9rem 1rem;
  margin-bottom: 1.2rem;
  width: 100%;
  font-size: 1rem;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.05);

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #a0c4ff;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #6c63ff, #8364e8);
  color: #fff;
  border: none;
  padding: 0.85rem;
  width: 100%;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #554dff, #7153e8);
  }
`;
