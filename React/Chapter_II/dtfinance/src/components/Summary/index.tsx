import { Container } from "./styles";
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import TotalImg from '../../assets/total.svg';
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const {transactions} = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit') {
      acc.income += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.outcome += transaction.amount
      acc.total -= transaction.amount
    }

    return acc
  },{
    income: 0,
    outcome: 0,
    total: 0
  })

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="Entradas"/>
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(summary.income)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="Saídas"/>
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(summary.outcome)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Total"/>
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(summary.total)}</strong>
      </div>
    </Container>
  )
}
