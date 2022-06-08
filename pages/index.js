import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Gradient from '../comps/Gradient';
import Logo from '../comps/Logo';
import styled from 'styled-components';
import Intro from '../comps/Intro';
import Dice from '../comps/Dice';

export default function Home() {
  return (
    <div>
      <Gradient/>
      <Logo />
      <Dice />
      <Intro />
    </div>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:60vw;
`