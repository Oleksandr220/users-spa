import React from 'react'
import { Link } from 'react-router-dom';
import './UsersListItem.scss';
import changeDateFormat from '../../services/changeDateFormat';
import { INFO_ROUTE } from '../../constants/routes';


export default function UsersListItem({ data }: any) {
  return (
    <li className={'user-wrapper'}>
      <Link to={`${INFO_ROUTE}/${data.login.uuid}`} className={'user-info'}>
          <p>{`Name: ${data.name.first} ${data.name.last}`}</p>
        <img src={data.picture.medium} alt="avatar" />
        <p>Birthday: {changeDateFormat(data.dob.date)}</p>
        <p>{data.gender}</p>
      </Link>
    </li>
  );
}
