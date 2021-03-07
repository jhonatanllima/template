import {
  Event,
  Header,
  MenuItems
} from '../components/index';


import { 
  Wrapper,
  Container,
  SectionHome,
} from '../styles/pages/Index';

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <SectionHome>
          <Header />
          <Event />
          <MenuItems />
        </SectionHome>
      </Wrapper>
    </Container>
  )
}
