import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 350px;
    height: 500px;
    background-color: #112540;
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 7%;
    box-shadow: 0 12px 16px 0 #3231313a,0 17px 50px 0 rgba(0,0,0,0.19);
    
`

export const ResultContainer = styled.label`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 300px;
    height: 70px;
    background-image: linear-gradient(to right, #8C50FF, #EB42FF);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    font-size: 40px;
    margin: auto;
    top: 10%;
`