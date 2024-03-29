import styled from 'styled-components';
import Intro from '../comps/Intro';
import Button from '../comps/Button';

export default function Home() {
  return (
    <Cont>
      {/* <Blocker>
        <img src='/blocker.png' width={'100%'} height='80%' />
      </Blocker> */}
      <Content>
      <Intro />
        <Text>DnD Hero League is the place for premium online Dungeons &amp; Dragons campaigns for ages 9-18. If you’re an experienced player, you’ll find an array of exciting ongoing campaigns and short adventures to join. If you’re new to DnD, we’ll teach you how to play and get you rolling quickly with your new favorite hobby. Come play alongside other heroes from around the world. </Text>
        <Text>All our adventures are inclusive, positive and collaborative, set in rich, fantastical worlds with epic storylines.</Text>
        <Text>All classes are integrated with Zoom and are hosted on Outschool, with professional dungeon masters and educators.</Text>
        <Spacer>
          <Button text='Join the Party!'/>
        </Spacer>
      </Content>
    </Cont>
  )
}

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  display: flex;
  width: 60vw; 
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 500px) {
        width: 80vw;
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

const Text = styled.div`
  font-family: 'Fondamento', cursive;
  font-size: 1.7rem;
  color: #FFFDC3;
  top: auto;
  line-height:2;
  margin-bottom: 30px;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

const Spacer = styled.div`
  display: flex;
  height: 200px;
  justify-content: center;
  align-items: center;
  margin-bottom: 300px;
`