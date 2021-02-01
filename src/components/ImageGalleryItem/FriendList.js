import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

import styles from './FriendList.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

FriendList.defaultProps = {
  friends: '',
};
