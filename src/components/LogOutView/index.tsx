import Button from '../Button';
import React from 'react'
import './LogOutView.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/authReducer/actions';
import { Trans, useTranslation } from 'react-i18next';

export default function LogOutView() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut(false));
    navigate('/login');
  };

  return (
    <div className={'home'}>
      <Button onClick={handleClick}>
        <Trans i18nKey="description.part5" />
      </Button>
    </div>
  );
}
