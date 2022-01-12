import React  from 'react'
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
import {User} from '../../types'

export default function UsersList() {
  const dispatch = useDispatch();
  const users: User[] = useSelector(usersSelector);
  const loading = useSelector(loadingSelector);
  const authentication = useSelector(authSelector);

  useEffect(() => {
    if (authentication) {
      dispatch({ type: ADD_USERS_ASYNC, data: 20 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect((): any => {
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

  const scrollHandler = (event: any) => {
    if (
      event.target.documentElement.scrollHeight -
        (event.target.documentElement.scrollTop + window.innerHeight) <
      80
    ) {
      dispatch(setLoading(true));
    }
  };

  const usersList = useMemo(() =>
    users.map(
      (user: User) => {
        return <UserListItem key={user.login.uuid} data={user} />
      }
    ),
    [users]
  );

  return <ul className={'users'}>{users && usersList}</ul>;
}
