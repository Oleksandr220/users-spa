import Button from '../Button';
import './LogOutView.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/authReducer/actions';

export default function LogOutView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut(false));
    navigate('/login');
  };

  return (
    <div className={'home'}>
      <Button mix={'button'} onClick={handleClick}>
        Log out
      </Button>
    </div>
  );
}
