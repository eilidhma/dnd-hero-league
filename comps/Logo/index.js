import styled from "styled-components";
import react from "react";

const Cont = styled.div`
    display: flex;
    position: fixed;
    top:0;
    left:0;
`

export default function Logo(){
    return (
        <Cont>
            <img src="logo.svg" style={{paddingTop:10}} width={200}/>
        </Cont>
    )
}