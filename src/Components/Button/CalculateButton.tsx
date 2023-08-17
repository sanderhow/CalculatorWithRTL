import React, { useState } from "react";
import * as P from './parts';

interface ICalculateButton {
    handleClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void
}

const CalculateButton: React.FC<ICalculateButton> = ({handleClick}) => {
const [isEqual, setIsEqual] = useState(false);

const click = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    handleClick(e);  
    
    setIsEqual(true);  
    setTimeout(() => {
        setIsEqual(false);  
    }, 1000);
};

return (
    <P.Wrapper isEqual={isEqual} onClick={click}>
        <P.ButtonText>
            =
        </P.ButtonText>
    </P.Wrapper>
)};

export default CalculateButton;
