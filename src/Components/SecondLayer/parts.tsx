import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 320px;
    height: 400px;
    background-color: #f4ecec;
    position: fixed;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 7%;
    box-shadow: 0 12px 16px 0 #0c0c0c3a,0 17px 50px 0 rgba(0,0,0,0.19);
    padding: 10px 0;
`

export const HorizontalLine = styled.hr`
    background-color: #dbd3d3;
    height: 1px;
    border: none;
    margin: 0;
`

export const GridWrapper = styled.div<{ lessPadding?: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 50px;

    ${({ lessPadding }) => lessPadding && css`
        padding: 20px 35px 20px 47px;
    `} 
`

export const CharacterWrapper = styled.div`
    padding: 6px;
`
export const CharacterWrapperWithColor = styled.div`
    padding: 6px;
    color: #A73CE8;
`

export const CharacterButton = styled.button`
    font-family: 'Roboto700', sans-serif;
    font-size: 1.4rem;
    border: none;
    background-color: #f4ecec;
`

export const CharacterButtonOperation = styled.button`
    font-family: 'Roboto700', sans-serif;
    font-size: 1.4rem;
    border: none;
    color: #A73CE8;
    font-weight: 900;
    background-color: unset;
`

export const CharacterButtonMod = styled.button`
    font-family: 'Roboto700', sans-serif;
    font-size: 1.4rem;
    border: none;
    background-color: #f4ecec;
`