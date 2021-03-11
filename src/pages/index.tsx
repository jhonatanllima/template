import {
  Event,
  Header,
  MenuItems,
  LiveVideo,
} from '../components/index';


import { 
  Wrapper,
  Container,
  Background,
  SectionHome,
} from '../styles/pages/Index';

export default function Home() {
  return (
    <>
    <Background />
    <Container>
      <Wrapper>

        <SectionHome>
          <Header />
          <Event />
          <MenuItems /> 
        </SectionHome> 

        <LiveVideo /> 
        
      </Wrapper>
    </Container>
    </>
  )
}
