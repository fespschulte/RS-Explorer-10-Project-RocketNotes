import { Container, Links, Content } from './styles.js'
import { Button } from '../../components/button/index.jsx'
import { Header } from '../../components/Header/index.jsx'
import { Section } from '../../components/Section/index.jsx'
import { Tag } from '../../components/Tag/index.jsx'
import { ButtonText } from '../../components/ButtonText/index.jsx'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui animi inventore fuga quis! Molestias sapiente eaque labore ipsam aperiam? Quos totam itaque harum delectus natus eos minima quas vitae sint?</p>

          <Section title="Links úteis">
            <Links>
              <a href="#">Item 1</a>
            </Links>
          </Section>
          
          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>
          
          <Button title="Entrar"/>
        </Content>
      </main>

    </Container>
  )
}