import {
  Center,
  Container,
  ContentLeft,
  ContentRight
} from '../../styles/components/Landing/Event';

export function Event(){
  return(
    <Container>
      <ContentLeft>
        <nav>
          <ul>
            <li><a href="#">Provas</a></li>
            <li><a href="#">Notícias</a></li>
            <li><a href="#">Sala de imprensa</a></li>
            <li><a href="#">Campeões</a></li>
          </ul>
        </nav>
      </ContentLeft>

      <Center >
        <img src="assets/images/LogoCampeonato.png" alt="Logo evento Congresso de vaquejada"/>
      </Center>

      <ContentRight >
       <img src="assets/images/dataPremiacao.png" alt="Data do Campeonato"/>
      </ContentRight>
    </Container>
  )
}