import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
  return (
    <nav className={'nav'}>
      <NavLink
        to="/users/list"
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        Users
      </NavLink>
      <NavLink
        to="/users/info"
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        User Info
      </NavLink>
      <NavLink
        to="/users/logout"
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        Log Out
      </NavLink>
    </nav>
  );
}
