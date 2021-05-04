import { Container, Content } from "./styles";
import LogoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <Content>
          <img src={LogoImg} alt="dt finance"/>
          <button type="button">Nova transação</button>
      </Content>
    </Container>
  )
}
