import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { authSelector } from './redux/authReducer/selectors';
import Spinner from './components/Spinner';

const LoginView = React.lazy(() => import('./components/LoginView'));
const HomeView = React.lazy(() => import('./components/HomeView'));
const LogOutView = React.lazy(() => import('./components/LogOutView'));
const UsersList = React.lazy(() => import('./components/UsersList'));
const UserInfo = React.lazy(() => import('./components/UserInfo'));

function App() {
  const authentication = useSelector(authSelector);

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            {!authentication ? (
              <Route path="/login" index element={<LoginView />} />
            ) : (
              <Route exact path="/users" element={<HomeView />}>
                <Route path="/users" element={<UsersList />} />
                <Route path="/users/info" element={<UserInfo />} />
                <Route path="/users/info/:id" element={<UserInfo />} />
                <Route path="/users/logout" element={<LogOutView />} />
              </Route>
            )}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
