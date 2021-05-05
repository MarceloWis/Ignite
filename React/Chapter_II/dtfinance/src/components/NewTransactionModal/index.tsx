import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { api } from "../../services/api";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import CloseImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
Modal.setAppElement('#root');
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

  useEffect(() => {
    api.get('/transactions').then(console.log)

  }, [])
  return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button onClick={onRequestClose} className="react-modal-close">
          <img src={CloseImg} alt="Fechar Modal"/>
        </button>
        <Container>
          <h2>Cadastrar transação</h2>

          <input type="text" placeholder="Título"/>
          <input type="number" placeholder="Preço"/>
          <TransactionTypeContainer>
            <RadioBox
              type="button"
              onClick={() => setType('deposit')}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={IncomeImg} alt="Entrada"/>
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type="button"
              onClick={() => setType('widthdraw')}
              isActive={type === 'widthdraw'}
              activeColor="red"
            >
              <img src={OutcomeImg} alt="Saída"/>
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>
          <input type="text" placeholder="Categoria"/>
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>

  )
}
