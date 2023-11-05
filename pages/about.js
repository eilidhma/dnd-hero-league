import styled from 'styled-components';
import { motion } from "framer-motion";
import React, { useState, useContext, useRef } from 'react';


export default function About(){


  return <Cont>
      <Blocker>
        <img src='/blocker.png' width={'100%'} height='80%' />
      </Blocker>
      <Section pd="0px 50px" pdBreak="0px 50px 50px 50px" width="60%" breakWidth="100%">
      Brynne Morrice is a professional DM with over 2,000 hours of experience leading immersive, vibrant Dungeons and Dragons adventures across a broad spectrum of rich, epic campaigns. He first started playing DnD in the days of 2nd Edition. Nowadays, he DM’s 5th Edition campaigns full time and also leads campaigns using Call of Cthulhu, Monster of the Week, Honey Heist and Blades in the Dark. 
      <br></br>
      <br></br>
      Brynne founded DnD Hero League to create a home for players around the world to take part in his particular brand of evocative, powerfully exciting campaigns. He is 100% certain that he has the best job on earth; leading DnD players into fantastical worlds and telling wondrous stories together, usually with heaps of laughter. Brynne lives in western Canada where he fills his free time with more DnD and playing with his two adorable fluffy puppies. 
      </Section>
      
      <Section pd="0px 50px" pdBreak="0px 0px 50px 0px" width="40%" breakWidth="100%">
        <div style={{display:"flex", width: "100%", justifyContent: "center", alignItems: "center"}}>
          <img style={{maxWidth: 500, minWidth: 350}} src='B-framed.png' width={'100%'} /> 
        </div>
      </Section>

    </Cont>
}

const Cont = styled.div`
  @media (max-width: 500px){
    padding: 120px 20px 20px 20px;
  }
  display: flex;
  width:100vw;
  min-height:100vh;
  justify-content:center;
  align-items:center;
  flex-direction: column-reverse;
  padding: 200px 0px 0px 0px;
  @media (min-width: 900px){
    padding: 120px 0px 0px 0px;
    justify-content:center;
    align-items:center;
    flex-direction: row;
  }
`

const Section = styled.div`
  @media (max-width: 500px){
    width: ${({breakWidth})=>breakWidth};
    padding: 20px;
  }
  @media (max-width: 900px){
    width: ${({breakWidth})=>breakWidth};
    padding: ${({pdBreak})=>pdBreak};
  }
  font-family: 'Fondamento', cursive;
  font-size: 1.2rem;
  font-weight:300;
  color:#FFFDC3;
  padding: ${({pd})=>pd};
  justify-content: center;
  align-items: flex-start;
  height: fill;
  width: ${({width})=>width};
`

const Title = styled.p`
  font-family: 'Cinzel Decorative', cursive;
  font-size: 2rem;
  font-weight:300;
  color:#FFFDC3;
  text-align:center;
  width:100%;
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`

const Blocker = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 25vh;
  z-index: 3;
   @media (max-width: 900px) {
        height: 20vh;
    }
    @media (max-width: 500px) {
      height: 16vh;
    }
`