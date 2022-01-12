import IconsSVG from './icons.svg';
import React from 'react'

type Props = {
  name: string;
  color?: string;
  size?: string;
  className?: string;
}

export default function Icon({ name, color, size, className } : Props) {
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