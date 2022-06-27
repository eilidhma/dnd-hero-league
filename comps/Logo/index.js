import styled from "styled-components";
import react from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Cont = styled.div`
    display: flex;
    position: fixed;
    top:0;
    left:0;
    z-index: 10;
    width: 200px;
    @media (max-width: 900px) {
        width: 150px;
    }
    @media (max-width: 500px) {
        width: 100px;
    }
`

export default function Logo(){

    const r = useRouter();


    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:3, duration:2}}
        >
            <Cont>
                <img onClick={()=>r.push('/')} src="gold_logo.svg" style={{padding:10, margin:15}} width={'100%'}/>
            </Cont>
        </motion.div>
    )
}