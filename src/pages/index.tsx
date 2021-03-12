import {
  Event,
  Header,
  Footer,
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
        <Footer />
      </Wrapper>
    </Container>
    </>
  )
}
