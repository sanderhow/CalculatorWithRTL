import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.button<{ isEqual?: boolean }>`
  background-image: linear-gradient(to right, #8c50ff, #a73ce8, #eb42ff);
  border-radius: 25px;
  border: none;
  width: 110px;
  height: 47px;
  text-align: center;
  text-decoration: none;
  left: 33%;
  position: absolute;
  bottom: -25px;

  ${({ isEqual }) =>
    isEqual &&
    css`
      animation: zoom-in-zoom-out 0.2s ease-out;

      @keyframes zoom-in-zoom-out {
        0% {
          transform: scale(1, 1);
        }
        50% {
          transform: scale(1.1, 1.1);
        }
        100% {
          transform: scale(1, 1);
        }
      }
    `}
`;

export const ButtonText = styled.div`
  font-size: 1.2rem;

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
