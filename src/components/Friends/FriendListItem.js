import PropTypes from 'prop-types';
import css from './friends.module.css';


const FriendListItem = ({friend}) => {
        const {isOnline, avatar, name} = friend;
         return (
            <li className={css.item}>
            <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
             <p className={css.name}>{name}</p>
</li>)}
       
FriendListItem.propTypes = {
   friend: PropTypes.arrayOf(
      PropTypes.exact({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
      }).isRequired,
    ).isRequired,
  };

export default FriendListItem;