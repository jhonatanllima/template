import {
  Container
} from '../../styles/components/Landing/Header';

export function Header(){
  return(
    <Container>
      <img src="assets/images/quartodemilha.svg" alt="Logo Quarto de Milha"/>
      <p>
        <img src="assets/icons/youtubeicon.svg" alt="YoutubeIcon"/>
        <img src="assets/icons/instagram.svg" alt="Instagram Icon"/>  
        <img src="assets/icons/facebook.svg" alt="Facebook Icon"/>
        @abqmoficial
      </p>
    </Container>
  )
}