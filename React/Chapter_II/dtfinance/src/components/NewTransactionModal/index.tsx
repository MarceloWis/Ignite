import { FormEvent, useState } from "react";
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import CloseImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import { useTransactions } from "../../hooks/useTransactions";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
Modal.setAppElement('#root');
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const {createTransaction} = useTransactions();

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault()
    await createTransaction({ title, amount, category, type })
    setType('deposit')
    setTitle('')
    setAmount(0)
    setCategory('')
    onRequestClose()
  }

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
        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>

          <input type="text" placeholder="Título" value={title} onChange={event => setTitle(event.target.value)} />
          <input type="number" placeholder="Preço"  value={amount} onChange={event => setAmount(Number(event.target.value))}  />
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
          <input type="text" placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>

  )
}
