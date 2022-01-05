import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginView from './components/LoginView';
import HomeView from './components/HomeView';
import LogOutView from './components/LogOutView';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" index element={<LoginView />} />
          <Route path="/users" element={<HomeView />}>
            <Route path="/users/list" element={<UsersList />} />
            <Route path="/users/logout" element={<LogOutView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
