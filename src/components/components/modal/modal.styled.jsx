import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  );
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  width: 70%;
  max-width: 300px;
  height: 70%;
  max-height: 600px;
  transform: translate(-50%, -50%);
  padding: 10px 10px 20px;
  background-color: #ffffff;
  border-radius: 20px;
  overflow-y: auto;
  @media (min-width: 481px) {
    padding: 20px 60px;
    max-width: 500px;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #28abe8;

  &:hover {
    color: #188ce8;
  }
`;

export const SVG = styled.svg`
  fill: currentColor;
`;
