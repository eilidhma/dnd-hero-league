import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { slide as Menu } from 'react-burger-menu'
import BookNow from '../BookNow';

const Cont = styled.div`
z-index: 1000;
width: 100vw;
position: fixed;
top: 0;
height: 80px;
@media (min-width: 700px) { 
  display: none;
}
`

const navbarStyles = {
  position:'fixed',
  display:'flex',
  flexDirection:'row',
  width:'100vw',
  height:100,
  justifyContent:'center',
  alignItems:'center',
  paddingLeft:30,
  paddingRight:30,
  zIndex:100,
  transition: 'top 0.5s'
}


const Hamb = ({
}) => {
  const r = useRouter();

  const variants = {
    default: { rotate: 0 },
    dark: { rotate: 180 }
  }

  const [on, setOn] = useState(false)


  function showSettings(e) {
    e.preventDefault();
  }

  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px'
    },
    bmBurgerBars: {
    //   background: '#FFFDC3'
    },
    bmBurgerBarsHover: {
      background: '#FFFDC30'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#FFFDC3'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      width: '100%'
    },
    bmMenu: {
      background: '#440C00',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#FFFDC3'
    },
    bmItemList: {
      color: "#FFFDC3",
      fontFamily:'Fondamento, cursive',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  const [open, setOpen] = useState(false)

  useEffect(()=>{
    console.log(open)
  },[open])


  return <Cont>
            <Menu onClose={()=>setOpen(false)} onOpen={()=>setOpen(true)} isOpen={open} styles={ styles } customBurgerIcon={ 
            <svg width="15" height="6" viewBox="0 0 15 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="0.5" x2="14.5" y2="0.5" stroke={"#FFFDC3"} strokeLinecap="round"/>
                <line x1="4.5" y1="5.5" x2="14.5" y2="5.5" stroke={"#FFFDC3"} strokeLinecap="round"/>
            </svg>
        } right >
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            alignItems:'center',
            width: '100%',
            height: '100%'
        }} >
            <a style={{padding:50, fontSize:20}} onClick={()=>{
                setOpen(false)
                r.push('./')}}>Home</a>
            {/* <a style={{padding:50, fontSize:20}} target='blank' href='https://outschool.com/search?startAfter=AllUpcoming&theme=life-skills&q=Brynne%20Morrice%2C%20BFA#abl47z57ew'>Book Now</a> */}
            <a style={{padding:50, fontSize:20}} onClick={()=>{
              setOpen(false)
              r.push('./about')}}>About</a>
            <a style={{padding:50, fontSize:20}} onClick={()=>{
              setOpen(false)
              r.push('./contact')}}>Contact</a>
              <a style={{padding:50, fontSize:20}} onClick={()=>{
                setOpen(false)
                r.push('./campaigns')}}>Campaigns</a>
        </div>
        </Menu>
      </Cont>
}

export default Hamb;