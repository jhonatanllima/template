import {
  Container
} from '../../styles/components/Landing/Footer'

export function Footer(){
  return(
    <Container>
      <img src="assets/images/footer.png" alt="Logo Apoiadores"/>
      <h4>Associação Brasileira de Criadores de Cavalo Quarto de Milha | Todos os direitos reservados</h4>

      <section>
        <span>
          Design and <br/>
          Developed by
        </span>
        <img src="assets/icons/iclouds.png" alt="Logo iClouds"/>
      </section>
    </Container>
  )
}