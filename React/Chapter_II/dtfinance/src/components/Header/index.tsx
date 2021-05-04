import { Container, Content } from "./styles";
import LogoImg from '../../assets/logo.svg';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
          <img src={LogoImg} alt="dt finance"/>
          <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>


      </Content>
    </Container>
  )
}
