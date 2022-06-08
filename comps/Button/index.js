import styled from "styled-components";
import react from "react";

const Cont = styled.a`
    width: 250px;
    height: 60px;
    font-family: 'Fondamento', cursive;
    font-size: 2rem;
    color: #FFFDC3;
    border: 1px solid #FFFDC3;
    border-radius: 10px;
    background: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: #FFFDC3;
        cursor: pointer;
        color: black;
    }
`

export default function Button({
    text='text'
}){
    return (
        <Cont>
            {text}
        </Cont>
    )
}