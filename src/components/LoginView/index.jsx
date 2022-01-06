import Button from '../Button';
import './LoginView.scss';
import { useNavigate } from 'react-router-dom';

export default function LoginView() {
  const navigate = useNavigate();

  return (
    <div className={'home'}>
      <Button mix={'button'} onClick={() => navigate('/users')}>
        Log in
      </Button>
    </div>
  );
}
