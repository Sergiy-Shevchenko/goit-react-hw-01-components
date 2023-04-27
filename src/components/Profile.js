import PropTypes from 'prop-types';
import css from '././Profile/user.module.css';
export default function RenderProfile ({avatar, tag, username, location, stats}) { 

    return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt={tag}
          className={css.avatar}
          width="48"
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
    
      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
    )};

    RenderProfile.propTypes = {
        avatar: PropTypes.string.isRequired, 
        tag: PropTypes.string.isRequired, 
        username: PropTypes.string.isRequired, 
        location: PropTypes.string.isRequired,
        stats: PropTypes.shape({
          followers: PropTypes.number.isRequired,
          views: PropTypes.number.isRequired,
          likes: PropTypes.number.isRequired,
        }),
    };