import changeDateFormat from '../../services/changeDateFormat';

export default function UserDetails({
  name,
  avatar,
  birthday,
  gender,
  adress,
  phone,
  registered,
}) {
  return (
    <div className={'user-details'}>
      <p className={'user-details'}>
        Name:
        <span> {name.first}</span>
        <span> </span>
        <span> {name.last}</span>
      </p>
      <img src={avatar.large} alt="avatar" />
      <p>Birthday: {changeDateFormat(birthday.date)}</p>
      <p>Gender: {gender}</p>
      <p>
        Country: {adress.country}, City: {adress.city}
      </p>
      <p>
        Street: {adress.street.name}, Number: {adress.street.number}
      </p>
      <p>Phone number: {phone}</p>
      <p>Registered date: {changeDateFormat(registered.date)}</p>
    </div>
  );
}
