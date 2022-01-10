import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
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
    if (authentication) {
      dispatch({ type: ADD_USERS_ASYNC, data: 20 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loading) {
      dispatch({ type: ADD_USERS_ASYNC, data: 20 });
    }
    return dispatch(setLoading(false));
  }, [loading]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [loading]);

  const scrollHandler = (event) => {
    if (
      event.target.documentElement.scrollHeight -
        (event.target.documentElement.scrollTop + window.innerHeight) <
      80
    ) {
      dispatch(setLoading(true));
    }
  };

  const memoList = useMemo(() =>
    users.map(
      (user) => {
        return <UserListItem key={user.login.uuid} data={user} />;
      },
      [users]
    )
  );

  return <ul className={'users'}>{users && memoList}</ul>;
}
