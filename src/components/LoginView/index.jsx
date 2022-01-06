import Button from '../Button';
import './LoginView.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authReducer/actions';

export default function LoginView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(logIn(true));
    navigate('/users');
  };

  return (
    <div className={'home'}>
      <Button mix={'button'} onClick={handleClick}>
        Log in
      </Button>
    </div>
  );
}
