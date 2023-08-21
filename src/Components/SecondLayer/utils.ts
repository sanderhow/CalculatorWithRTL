export const calculateCurrentNumber = (num1: string, num2: string, operator: string) => {
    switch (operator) {
        case '+':
            return roundNumber(Number(num1) + Number(num2));
        case '-':
            return roundNumber(Number(num1) - Number(num2));
        case '/':
            return roundNumber(Number(num1) / Number(num2));
        case 'x':
            return roundNumber(Number(num1) * Number(num2));
        case 'mod':
            if (num2 === '0') return 'NaN';
            return roundNumber(Number(num1) % Number(num2));
        default:
            return 'NaN';    
    }
}

const numbersAfterDecimal = (num: number) => {
    if (Number.isInteger(num)) {
      return 0;
    }
  
    const arr = num.toString().split('.');
    return arr[1].length;
  }

const roundNumber = (sum: number) => {
    switch (numbersAfterDecimal(sum)) {
        case 0: 
            return sum.toString();
        case 1: 
            return sum.toFixed(1).toString();
        case 2:
            return sum.toFixed(2).toString();
        case 3:
            return sum.toFixed(3).toString();
        case 4:
            return sum.toFixed(4).toString();
    default:
        return sum.toFixed(4).toString();
    }
}

export const modifyNumber = (num: string, operator: string) => {
    switch (operator) {
        case '%':
            return (Number(num) / 100).toString();
        case '+/-':
            return (Number(num) * -1).toString();
        case '.':
            for (let i = 0; i < num.length; i++) {
                if (num[i] === '.') {
                    return num;
                }
            }
            return num + '.';
        default:
            return num;    
    }
}
