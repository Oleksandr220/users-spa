import Button from '../Button'
import './LogOutView.scss'
import { useNavigate } from 'react-router-dom'

export default function LogOutView() {
  const navigate = useNavigate()

  return (
    <div className={'home'}>
      <Button mix={'button'} onClick={() => navigate('/login')}>
        Log out
      </Button>
    </div>
  )
}
