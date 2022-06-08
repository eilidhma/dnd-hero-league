import styled from "styled-components";
import react from "react";

const Cont = styled.div`
    display: flex;
    position: fixed;
    bottom:0;
    right:0;
    z-index: -1;
`

export default function Dice(){
    return (
        <Cont>
            <img src="dice.jpg" width={700}/>
        </Cont>
    )
}