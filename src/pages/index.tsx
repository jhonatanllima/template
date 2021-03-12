import {
  Event,
  Header,
  LiveVideo,
  MenuItems,
  LastedNews,
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
        <LastedNews /> 
        
      </Wrapper>
    </Container>
    </>
  )
}
