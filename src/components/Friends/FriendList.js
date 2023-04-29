import PropTypes from 'prop-types';
import css from './friends.module.css';
import Friends from './FriendListItem.js';


const FriendList = ({friends}) => {
         return (
            <ul className={css.friend_list}>
               {friends.map((friend) => (
                  <Friends friend={friend} key={friend.id}></Friends>))} 
            </ul>
        )    
      }

FriendList.propTypes = {
   friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
      }).isRequired,
    ).isRequired,
  };

export default FriendList;