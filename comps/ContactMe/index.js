import styled from "styled-components";
import react from "react";
import Button from "../Button";
import { motion } from "framer-motion";
import Router, {useRouter} from "next/router";

const Cont = styled.div`
    @media (max-width: 700px) { 
    display: none;
    }
    display: flex;
    position: fixed;
    
    top:0;
    right:0;
    margin-right: 300px;
    padding-top: 25px;
    z-index: 20;
    padding-right: 25px;

    width: 250px;
    height: 90px;
    font-family: 'Fondamento', cursive;
    font-size: 1.5rem;
    color: #FFFDC3;
    background: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: #FFFDC3;
    }
`

export default function ContactMe(){

    const r = useRouter()
    
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:3, duration:2}}>
            <Cont onClick={()=>r.push('./contact')}>
                Contact Me
            </Cont>
        </motion.div>
    )
}