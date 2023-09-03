import React, { useState } from "react";
import CalculateButton from "../Button/CalculateButton";
import * as P from "./parts";
import { useEffect } from "react";
import { calculateCurrentNumber, modifyNumber } from "./utils";

interface ISecondLayer {
  num1: string;
  num2: string;
  setNum1: React.Dispatch<React.SetStateAction<string>>;
  setNum2: React.Dispatch<React.SetStateAction<string>>;
}

const SecondLayer: React.FC<ISecondLayer> = ({
  num1,
  num2,
  setNum1,
  setNum2,
}) => {
  const [operator, setOperator] = useState<string>("");

  const handleKeyBoardEvent = (event: KeyboardEvent) => {
    handleCalculations(event.key);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyBoardEvent);

    return () => {
      document.removeEventListener("keydown", handleKeyBoardEvent);
    };
  }, [handleKeyBoardEvent]);

  const handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    let userInput = (event.target as HTMLButtonElement).innerHTML;
    handleCalculations(userInput);
  };

  const handleCalculations = (userInput: string) => {
    switch (userInput) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (num1 === "" || !(userInput === "0") || num1) {
          if (num1 && operator && num2.length < 9) {
            setNum2((prev) => {
              return prev + userInput;
            });
          } else if (num1.length < 9) {
            setNum1((prev) => {
              return prev + userInput;
            });
          }
        }

        let audio = new Audio("./1-9.mp3");
        audio.play();
        break;

      case "%":
      case "+/-":
      case ".":
        if (num2) {
          setNum2(modifyNumber(num2, userInput));
        } else if (num1) {
          setNum1(modifyNumber(num1, userInput));
        }

        let audio2 = new Audio("./specialSigns.mp3");
        audio2.play();
        break;

      case "+":
      case "-":
      case "/":
      case "x":
      case "mod":
        if (num1 && num2 && operator) {
          setNum1(calculateCurrentNumber(num1, num2, operator));
          setNum2("");
        }
        setOperator(userInput);

        let audio3 = new Audio("./audio6.mp3");
        audio3.play();
        break;

      case "=":
        if (num1 && num2 && operator) {
          setNum1(calculateCurrentNumber(num1, num2, operator));
          setNum2("");
        }

        let audio4 = new Audio("./=.mp3");
        audio4.play();
        break;

      case "C":
        setNum1("");
        setNum2("");
        setOperator("");
        let audio5 = new Audio("./C.mp3");
        audio5.play();
        break;

      default:
        return "NaN";
    }
  };

  return (
    <P.Wrapper>
      <P.GridWrapper lessPadding>
        <P.CharacterWrapper>
          <P.CharacterButton onClick={handleClick}>C</P.CharacterButton>
        </P.CharacterWrapper>

        <P.CharacterWrapper>
          <P.CharacterButton onClick={handleClick}>+/-</P.CharacterButton>
        </P.CharacterWrapper>

        <P.CharacterWrapper>
          <P.CharacterButton onClick={handleClick}>%</P.CharacterButton>
        </P.CharacterWrapper>
        <P.CharacterWrapper>
          <P.CharacterButtonMod onClick={handleClick}>mod</P.CharacterButtonMod>
        </P.CharacterWrapper>
      </P.GridWrapper>
      <P.HorizontalLine />
      <P.GridWrapper>
        <P.CharacterWrapper>
          <P.CharacterButton onClick={handleClick}>7</P.CharacterButton>
        </P.CharacterWrapper>

        <P.CharacterWrapper>
          <P.CharacterButton onClick={handleClick}>8</P.CharacterButton>
        </P.CharacterWrapper>
        <P.CharacterWrapper>
          <P.CharacterButton onClick={handleClick}>9</P.CharacterButton>
        </P.CharacterWrapper>

        <P.CharacterWrapperWithColor>
          <P.CharacterButtonOperation onClick={handleClick}>
            /
          </P.CharacterButtonOperation>
        </P.CharacterWrapperWithColor>
      </P.GridWrapper>
      <P.HorizontalLine />
      <P.GridWrapper>
        <P.CharacterWrapper>
          <P.CharacterButton onClick={handleClick}>4</P.CharacterButton>
        </P.CharacterWrapper>
        <P.CharacterWrapper>
          <P.CharacterButton onClick={handleClick}>5</P.CharacterButton>
        </P.CharacterWrapper>
        <P.CharacterWrapper>
          <P.CharacterButton onClick={handleClick}>6</P.CharacterButton>
        </P.CharacterWrapper>
        <P.CharacterWrapperWithColor>
          <P.CharacterButtonOperation onClick={handleClick}>
            x
          </P.CharacterButtonOperation>
        </P.CharacterWrapperWithColor>
      </P.GridWrapper>
      <P.HorizontalLine />
      <P.GridWrapper>
        <P.CharacterWrapper>
          <P.CharacterButton onClick={handleClick}>1</P.CharacterButton>
        </P.CharacterWrapper>
        <P.CharacterWrapper>
          <P.CharacterButton onClick={handleClick}>2</P.CharacterButton>
        </P.CharacterWrapper>
        <P.CharacterWrapper>
          <P.CharacterButton onClick={handleClick}>3</P.CharacterButton>
        </P.CharacterWrapper>
        <P.CharacterWrapperWithColor>
          <P.CharacterButtonOperation onClick={handleClick}>
            -
          </P.CharacterButtonOperation>
        </P.CharacterWrapperWithColor>
      </P.GridWrapper>
      <P.HorizontalLine />
      <P.GridWrapper>
        <P.CharacterWrapper>
          <P.CharacterButton data-testid="zeroButton" onClick={handleClick}>
            0
          </P.CharacterButton>
        </P.CharacterWrapper>
        <P.CharacterWrapper>
          <P.CharacterButton onClick={handleClick}>.</P.CharacterButton>
        </P.CharacterWrapper>

        <P.CharacterWrapperWithColor>
          <P.CharacterButtonOperation onClick={handleClick}>
            +
          </P.CharacterButtonOperation>
        </P.CharacterWrapperWithColor>
      </P.GridWrapper>

      <CalculateButton handleClick={handleClick} />
    </P.Wrapper>
  );
};

export default SecondLayer;
