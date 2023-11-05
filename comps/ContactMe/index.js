import styled from "styled-components";
import react from "react";
import Button from "../Button";
import { motion } from "framer-motion";
import Router, {useRouter} from "next/router";
import BookNow from "../BookNow";

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
    
    return (
        <motion.div
        style={{position: "fixed", top: 0, display: "flex", width: "100%", zIndex: 20}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:3, duration:2}}>
            <NavBar>
              <NavItem onClick={()=>r.push('./about')}>
                About
              </NavItem>
              <NavItem onClick={()=>r.push('./contact')}>
                Contact
              </NavItem>
              <NavItem>
                <BookNow />
              </NavItem>
            </NavBar>
        </motion.div>
    )
}