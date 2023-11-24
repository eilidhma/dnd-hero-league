import styled from "styled-components";
import react from "react";
import Button from "../Button";
import { motion } from "framer-motion";
import Router, {useRouter} from "next/router";
import BookNow from "../BookNow";
import { useState, useEffect } from "react";

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

const NavItem = styled.div`
  display: flex;
  min-width: 150px;
  text-decoration: ${({textDeco})=>textDeco};
  &:hover {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: #FFFDC3;
    }
`

const NavBar = styled.div`

  @media (max-width: 700px) { 
    display: none;
    }
    display: flex;
    /* position: absolute; */
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 90px;
    font-family: 'Fondamento', cursive;
    font-size: 1.5rem;
    color: #FFFDC3;
    z-index: 20;
    /* top:0; */
    padding: 25px 30px 0px 0px;
`

export default function ContactMe(){

    const r = useRouter()
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
  
    
    return (
        <motion.div
        style={{ position: "fixed", top: scrolling ? -100 : 0, display: "flex", width: "100%", zIndex: 20, transition: "top 0.25s ease"
      }}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:3, duration:2}}>
            <NavBar>
              <NavItem textDeco={r.pathname === '/about' ? "underline" : "auto"} onClick={()=>r.push('./about')}>
                About
              </NavItem>
              <NavItem textDeco={r.pathname === '/contact' ? "underline" : "auto"} onClick={()=>r.push('./contact')}>
                Contact
              </NavItem>
              <NavItem textDeco={r.pathname === '/campaigns' ? "underline" : "auto"} onClick={()=>r.push('./campaigns')}>
                Campaigns
              </NavItem>
              {/* <NavItem>
                <BookNow />
              </NavItem> */}
            </NavBar>
        </motion.div>
    )
}