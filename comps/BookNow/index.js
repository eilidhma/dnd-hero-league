import styled from "styled-components";
import react from "react";
import Button from "../Button";
import { motion } from "framer-motion";

const Cont = styled.div`
    @media (max-width: 449px) { 
    display: none;
    }
    display: flex;
    position: fixed;
    top:0;
    right:0;
    padding-top: 25px;
    z-index: 20;
    padding-right: 25px;
`

export default function BookNow(){
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:3, duration:2}}>
            <Cont>
                <Button text="Book Now"/>
            </Cont>
        </motion.div>
    )
}