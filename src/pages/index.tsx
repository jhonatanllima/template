import {
  Event,
  Header
} from '../components/index';


import { 
  Wrapper,
  Container 
} from '../styles/pages/Index';

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Event />
      </Wrapper>
    </Container>
  )
}
