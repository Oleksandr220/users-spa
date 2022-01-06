import './UsersListItem.scss';

export default function UsersListItem({ name, avatar, birthday, gender }) {
  const changeDateFormat = (date) => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };
    return new Date(date).toLocaleString('Ru-ru', options);
  };

  return (
    <li className={'user-wrapper'}>
      <p>
        <span>{name.first}</span>
        <span> </span>
        <span>{name.last}</span>
      </p>
      <img src={avatar.thumbnail} alt="avatar" />
      <p>Birthday: {changeDateFormat(birthday.date)}</p>
      <p>{gender}</p>
    </li>
  );
}
