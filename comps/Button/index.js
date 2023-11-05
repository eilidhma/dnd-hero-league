import styled from "styled-components";
import react from "react";

const Cont = styled.a`
    width: 230px;
    height: 60px;
    font-family: 'Fondamento', cursive;
    font-size: 1.5rem;
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
    @media (max-width: 500px) {
        width: 130px;
        height: 40px;
        font-size: 1rem;
    }

`

export default function Button({
    text='text',
    zIndex=1,
    href='https://outschool.com/search?startAfter=AllUpcoming&theme=life-skills&q=Brynne%20Morrice%2C%20BFA#abl47z57ew'
}){
    return (
        <Cont zIndex={zIndex} target='_blank' href={href}>
            {text}
        </Cont>
    )
}