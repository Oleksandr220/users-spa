import Button from '../Button';
import './LoginView.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authReducer/actions';
import { Trans, useTranslation } from 'react-i18next';

export default function LoginView() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(logIn(true));
    navigate('/users');
  };

  return (
    <div className={'home'}>
      <Button onClick={handleClick}>
        <Trans i18nKey="description.part6" />
      </Button>
    </div>
  );
}
