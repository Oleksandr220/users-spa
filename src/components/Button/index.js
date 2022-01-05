import './Button.scss'
import cx from 'classnames'

export default function Button({ onClick, children, mix }) {
  return (
    <button className={cx('button', mix)} onClick={onClick}>
      {children}
    </button>
  )
}
