import IconsSVG from './icons.svg';

type Props = {
  name: string;
  color?: string;
  size?: number;
  className?: string;
}

export default function Icon({ name, color, size, className }) {
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      fill={color}
      stroke={color}
      width={size}
      height={size}
    >
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
}