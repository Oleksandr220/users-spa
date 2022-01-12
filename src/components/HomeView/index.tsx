import { Outlet } from 'react-router-dom';
import './HomeView.scss';
import Header from '../Header';
import Navigation from '../Navigation';
import React from 'react';

export default function HomeView() {
  return (
    <div>
      <Header />
      <Navigation />
      <Outlet />
    </div>
  );
}
