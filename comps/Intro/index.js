import { motion } from "framer-motion"
import styled from "styled-components";
import react from "react";
import { GiBarbedArrow } from "react-icons/gi";

export default function Intro(){
    return (
        <Cont>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1, duration:1.5}}
            >
                <Heading fontSize={'3.5rem'}>DnD HERO LEAGUE:</Heading>
            </motion.div>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:2, duration:1.5}}
            >
                <Heading fontSize={'2.5rem'}>LIVE YOUR ADVENTURE</Heading>
            </motion.div>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{ repeat: Infinity, repeatType:'reverse', duration: 3, delay:3, ease:'easeIn'}}
            >
                <Rotate>
                    <GiBarbedArrow color="#FFFDC3" size={50}/>
                </Rotate>
            </motion.div>
        </Cont>
    )
}

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    @media (max-width: 500px) {
        height: 100vh;
    }
`

const Heading = styled.p`
    font-family: 'Cinzel Decorative', cursive;
    font-size: ${props=>props.fontSize};
    color: #FFFDC3;
    margin: 0;
    padding: 10px;
    @media (max-width: 500px) {
        padding: 20px;
    }
`

const Rotate = styled.div`
    margin-top: 30px;
    transform: rotate(45deg);
`