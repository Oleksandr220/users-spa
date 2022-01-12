import React  from 'react'
import changeDateFormat from '../../services/changeDateFormat';
import './UserDetails.scss';
import { IDetails } from '../../types'

interface IProps{
  userData: IDetails;
}

export default function UserDetails({ userData }: IProps) {
  console.log(userData)
  return (
    <div className={'user-details'}>
      <p>{`Name: ${userData.name.first} ${userData.name.last}`}</p>
      <img
        className={'user-details_image'}
        src={userData.picture.large}
        alt="avatar"
      />
      <p>Birthday: {changeDateFormat(userData.dob.date)}</p>
      <p>Gender: {userData.gender}</p>
      <p>
        Country: {userData.location.country}, City: {userData.location.city}
      </p>
      <p>
        Street: {userData.location.street.name}, Number:{' '}
        {userData.location.street.number}
      </p>
      <p>Phone number: {userData.phone}</p>
      <p>Registered date: {changeDateFormat(userData.registered.date)}</p>
    </div>
  );
}
