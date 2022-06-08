import styled from "styled-components";
import react from "react";

const Cont = styled.div`
    display: flex;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(112.87deg, #440C00 0%, #0D0804 60.42%, #0D0804 100%);
    z-index: -1;
`

export default function Gradient(){
    return (
        <Cont/>
    )
}