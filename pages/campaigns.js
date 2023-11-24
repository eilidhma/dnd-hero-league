import styled from 'styled-components';
import { motion } from "framer-motion";
import React, { useState, useContext, useRef } from 'react';
import Button from '../comps/Button';


export default function Campaigns(){


  return <>
    <Cont>
        <ImgCont>
          <img src='/mhi.jpg' width={'100%'} />
        </ImgCont>
        <Title>Monster Hunters Inc</Title>
        <Section>
          <q>In this epic ongoing adventure, our heroes will join the company of world-famous monster hunter, Alphirus Dragore, as they undertake strange and exotic monster-hunting missions across the Land of Enchantment, Rythianor. A D&D 5e campaign.</q>
        </Section>
        <Button href='https://checkout.stripe.com/c/pay/cs_live_a1lXetOVOOq4AWqk0YqzTHlL7fgxeBVsiam7TKFbx1vuvksAjDmDVGUlz5#fidkdWxOYHwnPyd1blppbHNgWjA0SkNOMkpXczZWblByNnFvcGRgUmMwcmt%2FS2lMYW5kVmtpNjdQSkh1MDEydFJjZHFjUEA0SjFhcEB0fXxqSjE3fGIyTXI0aXN0cGJwN0loZjVxX0c8aTJHNTVUSHZtcHJrPScpJ3VpbGtuQH11anZgYUxhJz8nNDFuNmEzMnVLM0NTMV9SNDExJ3gl' margin='80px 0px 80px 0px' text='Register'/>
        <SmallSection>Monster Hunters Inc. is an ongoing adventure. You can join at the beginning or you can jump in at anytime to join the hunt!

        This is an immersive Dungeons and Dragons campaign for players who wish to build a vibrant character and create an ongoing, fully-realized adventure with that character. Together, we will tell an epic story of your heroes' life.

        Our adventures will focus on team-building, storytelling, rich roleplaying, creative problem solving, exploration of wondrous fantasy lands and, of course, the hunting of unique, bizarre, fantastical creatures!

        It is recommended that you have played D&D 5th Edition before, however it is not required. If you are brand new to the game, let me know and I will be delighted to introduce you to the game.
        </SmallSection>
      </Cont>
  </>
}

const Cont = styled.div`
  display: flex;
  width:100vw;
  min-height:100vh;
  justify-content:flex-start;
  align-items:center;
  flex-direction: column;
`

const Section = styled.div`
  @media (max-width: 500px) {
    font-size: 1.2rem;
    margin-bottom: 0;
  }
  font-family: 'Fondamento', cursive;
  font-size: 1.7rem;
  font-weight:300;
  color:#FFFDC3;
  padding: ${({pd})=>pd};
  justify-content: center;
  align-items: flex-start;
  width: 70%;
  line-height: 50px;
  text-align: center;
  margin-bottom: 50px;
`

const SmallSection = styled.div`
  @media (max-width: 500px) {
    padding: 0px 50px 50px 50px;
  }
  font-family: 'Fondamento', cursive;
  font-size: 1.2rem;
  font-weight:300;
  color:#FFFDC3;
  padding: ${({pd})=>pd};
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 30px 50px 50px 50px;
`

const Title = styled.p`
  font-family: 'Cinzel Decorative', cursive;
  font-size: 2.5rem;
  font-weight: 300;
  color: #FFFDC3;
  text-align: center;
  margin-top: 150px;
  margin-bottom: 100px;
  width: 100%;
  @media (max-width: 500px) {
    font-size: 1.7rem;

    margin-top: 50px;
    margin-bottom: 100px;
  }
  @media (max-width: 900px) {
    font-size: 2rem;

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

const ImgCont = styled.div`
  display: flex;

`