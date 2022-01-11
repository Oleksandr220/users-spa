import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { authSelector } from './redux/authReducer/selectors';
import Spinner from './components/Spinner';
import {
  LOGIN_ROUTE,
  USERS_ROUTE,
  INFO_ROUTE,
  USER_ID_ROUTE,
  LOGOUT_ROUTE,
  USERS_LIST,
} from './constants/routes';
import './services/i18n';

const LoginView = React.lazy(() => import('./components/LoginView'));
const HomeView = React.lazy(() => import('./components/HomeView'));
const LogOutView = React.lazy(() => import('./components/LogOutView'));
const UsersList = React.lazy(() => import('./components/UsersList'));
const UserInfo = React.lazy(() => import('./components/UserInfo'));
const Greetings = React.lazy(() => import('./components/Greetings'));

function App() {
  const authentication = useSelector(authSelector);

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            {!authentication ? (
              <Route
                path={LOGIN_ROUTE}
                element={
                  <>
                    <LoginView />
                  </>
                }
              />
            ) : (
              <Route path={USERS_ROUTE} element={<HomeView />}>
                <Route path={USERS_ROUTE} element={<Greetings />} />
                <Route path={USERS_LIST} element={<UsersList />} />
                <Route path={INFO_ROUTE} element={<UserInfo />} />
                <Route path={USER_ID_ROUTE} element={<UserInfo />} />
                <Route path={LOGOUT_ROUTE} element={<LogOutView />} />
              </Route>
            )}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
