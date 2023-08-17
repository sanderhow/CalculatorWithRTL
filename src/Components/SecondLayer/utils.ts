export const calculateCurrentNumber = (num1: string, num2: string, operator: string) => {
    console.log(operator);
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
    console.log(num);
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
    console.log("pedal");
    console.log(operator);
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
            return (Number(num) * -1).toString();    
    }
}

export const soundEffectEvent = (event: KeyboardEvent) => {
    const keyPress = event.key;
    console.log(keyPress);
    
    switch (keyPress) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                let audio = new Audio("./1-9.mp3");
                audio.play();
                break;
            
        default:
            return 'NaN';  

        }
}