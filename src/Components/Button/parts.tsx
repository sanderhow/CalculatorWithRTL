import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.button<{ isEqual?: boolean }>`
  background-image: linear-gradient(to right, #8C50FF, #A73CE8, #EB42FF);
  border-radius: 25px;
  border: none;
  width: 110px;
  height: 47px;
  text-align: center;
  text-decoration: none;
  left: 30%;
  position: absolute;

 ${({ isEqual }) => isEqual && css`
  animation: zoom-in-zoom-out 2s ease-out;
  
  @keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.5, 1.5);
  }
  100% {
    transform: scale(1, 1);
  }
}`}`

export const ButtonText = styled.div`
  font-size: 1.2rem;
`
