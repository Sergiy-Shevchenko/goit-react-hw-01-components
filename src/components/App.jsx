
import RenderProfile from '././Profile/Profile.js';
import user from '././Profile/user.json';
import Statistics from '././Statistics/Statistics.js';
import stats from '././Statistics/data.json';
import FriendList from '././Friends/FriendList.js';
import friends from '././Friends/friends.json';
import TransactionHistory from '././TransactionHistory/TransactionHistory.js';
import items from '././TransactionHistory/transactions.json';



export default function App () {
  return (
    <div>
      <RenderProfile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} /> 
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
      </div>
      
  );
};



//-------------------styles-----------------
//     style=
  //       height: '100vh',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101'
  //     