import { Container, Links } from './styles.js'
import { Button } from '../../components/button/index.jsx'
import { Header } from '../../components/Header/index.jsx'
import { Section } from '../../components/Section/index.jsx'

export function Details() {
  return (
    <Container>
      <Header />

      <Section title="Links úteis">
        <Links>
          <a href="#">Item 1</a>
        </Links>
      </Section>

      <Button title="Entrar"/>
    </Container>
  )
}