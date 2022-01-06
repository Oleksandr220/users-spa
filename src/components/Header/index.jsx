import Icon from '../Icon';
import './Header.scss';

export default function Header() {
  return (
    <header>
      <div className={'header-container'}>
        <Icon name="react" size="48" />
        <span>React SPA</span>
      </div>
    </header>
  );
}
