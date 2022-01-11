import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import {
  INFO_ROUTE,
  LOGOUT_ROUTE,
  USERS_LIST,
} from '../../constants/routes.js';
import LangButton from '../LangButton';
import { Trans, useTranslation } from 'react-i18next';

export default function Navigation() {
  const { i18n } = useTranslation();
  return (
    <div className={'nav-container'}>
      <nav className={'nav'}>
        <NavLink
          to={USERS_LIST}
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          <Trans i18nKey="description.part3">Users</Trans>
        </NavLink>
        <NavLink
          to={INFO_ROUTE}
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          <Trans i18nKey="description.part4">Users Info</Trans>
        </NavLink>
        <NavLink
          to={LOGOUT_ROUTE}
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          <Trans i18nKey="description.part5">Log Out</Trans>
        </NavLink>
      </nav>
      <div className="info-btns">
        <LangButton />
      </div>
    </div>
  );
}
