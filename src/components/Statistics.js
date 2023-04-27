import PropTypes from 'prop-types';
import css from '././Statistics/Statistics.module.css';
import makeColorsStatistics from './utils/makeColorsStatistics';
const Statistics = ({stats, title}) => {
    const makeColor = makeColorsStatistics()
        return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
        <ul className={css.stat_list}>
         {stats.map(stat => (
        <li className={css.item} key={stat.id} style={{backgroundColor: makeColor}}>
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>))}
        </ul>
    </section>
        )
    }

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ),
  };

export default Statistics;