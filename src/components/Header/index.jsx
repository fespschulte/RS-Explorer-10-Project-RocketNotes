import { Container, Profile, Logout } from './styles'
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/fespschulte.png" alt="foto do usuário" />
        <div>
          <span>Bem-vindo,</span>
          <strong>Fernando Pinto</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}