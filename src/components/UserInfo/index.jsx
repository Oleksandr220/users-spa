import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usersSelector } from '../../redux/usersReducer/selectors';
import UserDetails from '../UserDetails';
import './UserInfo.scss';
import '../../services/i18n';
import { USERS_LIST } from '../../constants/routes';
import { Trans, useTranslation } from 'react-i18next';

export default function UserInfo() {
  const { i18n } = useTranslation();
  const { id } = useParams();
  const users = useSelector(usersSelector);

  return (
    <>
      <Link to={USERS_LIST} className={'info-back'}>
        <Trans i18nKey="description.part2">Back</Trans>
      </Link>
      {id ? (
        <div className={'info-container'}>
          {users &&
            users
              .filter((user) => user.login.uuid === id)
              .map((user) => <UserDetails user={user} key={user.login.uuid} />)}
        </div>
      ) : (
        <div className={'info-container'}>
          <h2 className={'info-warning'}>
            <Trans i18nKey="description.part1">
              Select a user to see their info
            </Trans>
          </h2>
        </div>
      )}
    </>
  );
}
