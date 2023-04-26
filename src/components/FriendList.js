import PropTypes from 'prop-types';
import css from '././Friends/friends.module.css';
const FriendList = ({friends}) => {
         return (
            <ul className={css.friend_list} >
               {friends.map(friend => (  
            <li className={css.item} key={friend.id}>
            <span className={friend.isOnline ? css.statusOnline : css.statusOffline}></span>
            <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
             <p className={css.name}>{friend.name}</p>
</li>))}
          </ul>
        )    }

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.string,
    };

export default FriendList;