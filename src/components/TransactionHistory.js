import PropTypes from 'prop-types';
import css from '././TransactionHistory/transactionhistory.module.css';
const TransactionHistory = ({items}) => {
    //const {id, label, percentage} = stats;
        return (
            <table className={css.transaction_history}>
            <thead>
              <tr className={css.title}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
            </thead>
          
            <tbody>       
                {items.map(transaction => (  
              <tr key={transaction.id}>       
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.currency}</td>
              </tr>
                ))}
            </tbody>
          </table>
        )
    }

TransactionHistory.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
    };

export default TransactionHistory;
