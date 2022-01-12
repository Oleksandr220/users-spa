import React  from 'react'
import changeDateFormat from '../../services/changeDateFormat';
import './UserDetails.scss';
import { IUser } from '../../types'

interface IProps{
  userData: IUser;
}

export default function UserDetails({ userData }: IProps) {
  const {user} = userData
  return (
    <div className={'user-details'}>
      <p>{`Name: ${user.name.first} ${user.name.last}`}</p>
      <img
        className={'user-details_image'}
        src={user.picture.large}
        alt="avatar"
      />
      <p>Birthday: {changeDateFormat(user.dob.date)}</p>
      <p>Gender: {user.gender}</p>
      <p>
        Country: {user.location.country}, City: {user.location.city}
      </p>
      <p>
        Street: {user.location.street.name}, Number:{' '}
        {user.location.street.number}
      </p>
      <p>Phone number: {user.phone}</p>
      <p>Registered date: {changeDateFormat(user.registered.date)}</p>
    </div>
  );
}
