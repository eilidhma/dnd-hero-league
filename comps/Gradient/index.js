import styled from "styled-components";
import react from "react";

const Cont = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(112.87deg, #440C00 0%, #0D0804 60.42%, #0D0804 100%);
    z-index: -3;
`

export default function Gradient(){
    return (
        <Cont/>
    )
}