import styled from "styled-components";
import react from "react";

const Cont = styled.a`
    width: 250px;
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
`

export default function Button({
    text='text',
    href='https://outschool.com/search?startAfter=AllUpcoming&theme=life-skills&q=Brynne%20Morrice%2C%20BFA#abl47z57ew'
}){
    return (
        <Cont target='_blank' href={href}>
            {text}
        </Cont>
    )
}