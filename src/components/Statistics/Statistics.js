import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import makeColorsStatistics from '../../utils/makeColorsStatistics.js';
const Statistics = ({stats, title}) => {
    const makeColor = makeColorsStatistics()
        return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.stat_list}>
         {stats.map(({id, label, percentage}) => (
        <li className={css.item} key={id} style={{backgroundColor: makeColor}}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>))}
        </ul>
    </section>
        )
    }

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
      }).isRequired,
    ).isRequired,
  };

export default Statistics;