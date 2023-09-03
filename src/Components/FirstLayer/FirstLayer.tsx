import React from "react";
import * as P from "./parts";

interface IFirstLayer {
  num1: string;
  num2: string;
}

const FirstLayer: React.FC<IFirstLayer> = ({ num1, num2 }) => {
  return (
    <P.Wrapper>
      <P.ResultContainer data-testid="resultCalculation">
        {num2 || num1 || "0"}
      </P.ResultContainer>
    </P.Wrapper>
  );
};

export default FirstLayer;
