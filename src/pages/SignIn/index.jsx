import { Background, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { FiLogIn, FiLock, FiMail } from "react-icons/fi";
import { Button } from "../../components/button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail}/>
        <Input placeholder="Senha" type="password" icon={FiLock}/>

        <Button title="Entrar"/>
        <ButtonText title="Criar conta" isActive/>
      </Form>
      <Background />
    </Container>
  )
}