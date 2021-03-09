import { BiPlayCircle } from 'react-icons/bi';

import {
  Center, 
  Container,
  ContentLeft,
  ContentRight,
} from '../../styles/components/Landing/LiveVideo'

export function LiveVideo(){
  return(
    <Container>
      <ContentLeft>
        <button>
          <BiPlayCircle className="iconButton"/>
          teste de butão
        </button>
      </ContentLeft>

      <Center>
        <h3>Acompanhe o evento</h3>
        <h1>Ao vivo</h1>

        <div>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/a_nthSs7090" 
          frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen />
        </div>
      </Center>

      <ContentRight>  
        <h2>Teste de Título</h2>
        <p>
          Olha essa descrição de título quanto teste eu estou fazendo
          meu Deus que legal.
        </p>
      </ContentRight>
    </Container>
  )
}