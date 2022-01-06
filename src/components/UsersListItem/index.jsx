import { Link } from 'react-router-dom';
import './UsersListItem.scss';
import changeDateFormat from '../../services/changeDateFormat';

export default function UsersListItem({ id, name, avatar, birthday, gender }) {
  return (
    <li className={'user-wrapper'}>
      <Link to={`/users/info/${id}`} className={'user-info'}>
        <p>
          <span>{name.first}</span>
          <span> </span>
          <span>{name.last}</span>
        </p>
        <img src={avatar.medium} alt="avatar" />
        <p>Birthday: {changeDateFormat(birthday.date)}</p>
        <p>{gender}</p>
      </Link>
    </li>
  );
}
