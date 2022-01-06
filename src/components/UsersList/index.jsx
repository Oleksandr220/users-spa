import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserListItem from '../UsersListItem';
import { ADD_USERS_ASYNC } from '../../redux/usersReducer/actions';
import { usersSelector } from '../../redux/usersReducer/selectors';
import { authSelector } from '../../redux/authReducer/selectors';
import './UsersList.scss';

export default function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const authentication = useSelector(authSelector);

  useEffect(() => {
    if (authentication) {
      dispatch({ type: ADD_USERS_ASYNC });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className={'users'}>
      {users &&
        users.map((user) => (
          <UserListItem
            key={user.login.uuid}
            id={user.login.uuid}
            name={user.name}
            avatar={user.picture}
            birthday={user.dob}
            gender={user.gender}
          />
        ))}
    </ul>
  );
}
