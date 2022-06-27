import styled from 'styled-components';
import { motion } from "framer-motion";
import React, { useState, useContext, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Cont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100vw;
  height:100vh;
`

const Section = styled.div`
  @media (max-width: 500px) {
    height: 70px;
  }
  width:100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100px;
  flex-direction: column;
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

const SubTitle = styled.p`
  font-family: 'Fondamento', cursive;
  font-size: 1.5rem;
  font-weight:300;
  color:#FFFDC3;
  text-align:center;
  width:100%;
  padding-bottom: 20px;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

const Label = styled.label`
    @media (max-width: 500px) {
    min-width: 30vw;
    max-width: 30vw;
    border-radius: 0px;
    width: 50vw;
    font-size: 1.2rem;
    }
    font-family: 'Fondamento', cursive;
    font-size: 1.5rem;
    color:#FFFDC3;
    width: 15vw;
`
const Input = styled.input`
  @media (max-width: 500px) {
    min-width: 100%;
    max-width: 100%;
    }
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid #FFFDC3;
    color:#FFFDC3;
    font-weight:300;
    min-width: 30vw;
    max-width: 30vw;
    background-color: transparent;
    font-family: 'Fondamento', cursive;
    font-size: 20px;
`

const TextArea = styled.textarea`
@media (max-width: 500px) {
  min-width: 100%;
    max-width: 100%;
    border-radius: 0px;
    }
  border-top:none;
  border-left:none;
  border-right:none;
  border-radius: 0px;
  border-bottom: 1px solid #FFFDC3;
  resize: none;
  color: #FFFDC3;
  font-weight:300;
  font-size: 20px;
  background-color: transparent;
  min-width: 30vw;
  max-width: 30vw;
  font-family: 'Fondamento', cursive;
`

const Submit = styled.input`
    font-weight:300;
    border:1px solid #FFFDC3;
    color:#FFFDC3;
    padding:10px;
    text-align: center;
    font-size: 20px;
    margin-top: 100px;
    font-family: 'Fondamento', cursive;
    background-color: transparent;
    width: 200px;
    border-radius: 10px;
    &:hover {
        background-color: #FFFDC3;
        cursor: pointer;
        color: black;
    }
`

const Blocker = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 25vh;
  z-index: 3;
  /* @media (min-width: 1600px) {
        display: none;
  } */
`

export default function Contact(){

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mj0oxtr', 'template_mo1amod', form.current, 'Zv4txRxGpVFL5PPpK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
      alert('sent!')
      
  };

  return <Cont>
    <Blocker/>
        <form ref={form} onSubmit={sendEmail}>
        <Title>Contact Me!</Title>
        <SubTitle>Submit a message here, or contact me at: <br/><br/> brynne@dndheroleague.com</SubTitle>
        <Section>
          <Label htmlFor="name">Name:</Label>
          <Input type='text' name="from_name"/>
        </Section>
        <Section>
          <Label htmlFor="email">Email:</Label>
          <Input type='email' name="from_email"/>
        </Section>
        <Section>
          <Label htmlFor="message">Message:</Label>
          <TextArea name="message" />
        </Section>
        <Section>
          <Submit 
          type={"submit"}
          value={"Send"}/>
        </Section>
      </form>
    </Cont>
}
