import PropTypes from 'prop-types';
import css from './transactionhistory.module.css';
const TransactionHistory = ({items}) => {
   
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
                {items.map(({id, type, amount, currency}) => (  
              <tr key={id}>       
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
                ))}
            </tbody>
          </table>
        )
    }

TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;
