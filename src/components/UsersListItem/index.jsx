import { Link } from 'react-router-dom';
import './UsersListItem.scss';
import changeDateFormat from '../../services/changeDateFormat';
import { INFO_ROUTE } from '../../constants/routes';

export default function UsersListItem({ data }) {
  return (
    <li className={'user-wrapper'}>
      <Link to={`${INFO_ROUTE}/${data.login.uuid}`} className={'user-info'}>
        <p>
          <span>{data.name.first}</span>
          <span> </span>
          <span>{data.name.last}</span>
        </p>
        <img src={data.picture.medium} alt="avatar" />
        <p>Birthday: {changeDateFormat(data.dob.date)}</p>
        <p>{data.gender}</p>
      </Link>
    </li>
  );
}
