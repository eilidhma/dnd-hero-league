import styled from "styled-components";
import react from "react";

const Cont = styled.div`
    display: flex;
    position: fixed;
    bottom:0;
    right:0;
    z-index: -1;
    @media (max-width: 500px) {
        opacity: 0.5;
    }
`

export default function Dice(){
    return (
        <Cont>
            <img src="dice.png" width={700} height={'100%'}/>
        </Cont>
    )
}