import styled from "styled-components";
import react from "react";
import { motion } from "framer-motion";

const Cont = styled.div`
    display: flex;
    position: fixed;
    top:0;
    left:0;
    z-index: 10;
    @media (max-width: 500px) {
        width: 150px;
    }
`

export default function Logo(){
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:3, duration:2}}>
            <Cont>
                <img src="logo.svg" style={{paddingTop:10}} width={200}/>
            </Cont>
        </motion.div>
    )
}