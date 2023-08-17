import React, { useState } from 'react';
import FirstLayer from './Components/FirstLayer/FirstLayer';
import SecondLayer from './Components/SecondLayer/SecondLayer';
import * as P from './parts';

function App() {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [operator, setOperator] = useState<string>('');

  return (
    <P.Wrapper>
      <FirstLayer 
        num1={num1}
        num2={num2}
      />
      <SecondLayer 
        num1={num1}
        num2={num2}
        setNum1={setNum1}
        setNum2={setNum2}
        operator={operator}
        setOperator={setOperator}
      />
    </P.Wrapper>
  );
}

export default App;
