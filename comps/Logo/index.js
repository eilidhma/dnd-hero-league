import styled from "styled-components";
import react from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Cont = styled.div`
    display: flex;
    position: fixed;
    top:${({top})=>top};
    transition: top 0.25s ease;
    left:0;
    z-index: 200;
    width: 150px;
    @media (max-width: 900px) {
        width: 140px;
    }
    @media (max-width: 700px) {
        width: 100px;
        display: none;
    }
`

export default function Logo(){

    const r = useRouter();
    const [scrolling, setScrolling] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
  
        setScrolling(currentScrollY > 0 && currentScrollY > prevScrollY);
        setPrevScrollY(currentScrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [prevScrollY]);

    console.log(scrolling)

    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:3, duration:2}}
        >
            <Cont top={scrolling ? "-150px" : "0"}>
                <img onClick={()=>r.push('/')} src="gold_logo.svg" style={{padding:10, margin:15, cursor: "pointer"}} width={'100%'}/>
            </Cont>
        </motion.div>
    )
}