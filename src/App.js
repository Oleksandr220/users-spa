import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LoginView from './components/LoginView';
// import HomeView from './components/HomeView';
// import LogOutView from './components/LogOutView';
// import UsersList from './components/UsersList';
// import UserInfo from './components/UserInfo';
import Spinner from './components/Spinner';
const LoginView = React.lazy(() => import('./components/LoginView'));
const HomeView = React.lazy(() => import('./components/HomeView'));
const LogOutView = React.lazy(() => import('./components/LogOutView'));
const UsersList = React.lazy(() => import('./components/UsersList'));
const UserInfo = React.lazy(() => import('./components/UserInfo'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/login" index element={<LoginView />} />
            <Route path="/users" element={<HomeView />}>
              <Route path="/users/list" element={<UsersList />} />
              <Route path="/users/info" element={<UserInfo />} />
              <Route path="/users/info/:id" element={<UserInfo />} />
              <Route path="/users/logout" element={<LogOutView />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
