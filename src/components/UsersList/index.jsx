import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserListItem from '../UsersListItem';
import { ADD_USERS_ASYNC, setLoading } from '../../redux/usersReducer/actions';
import {
  usersSelector,
  loadingSelector,
} from '../../redux/usersReducer/selectors';
import { authSelector } from '../../redux/authReducer/selectors';
import './UsersList.scss';

export default function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const loading = useSelector(loadingSelector);
  const authentication = useSelector(authSelector);

  useEffect(() => {
    if (users) {
      return;
    }
    if (authentication) {
      dispatch({ type: ADD_USERS_ASYNC });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loading) {
      dispatch({ type: ADD_USERS_ASYNC });
    }
    return dispatch(setLoading(false));
  }, [loading]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  });

  const scrollHandler = (event) => {
    if (
      event.target.documentElement.scrollHeight -
        (event.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      dispatch(setLoading(true));
    }
  };

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
