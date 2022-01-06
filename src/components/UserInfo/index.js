import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usersSelector } from '../../redux/usersReducer/selectors';
import UserDetails from '../UserDetails';

export default function UserInfo() {
  const { id } = useParams();
  const users = useSelector(usersSelector);

  return (
    <>
      {id ? (
        <>
          {users &&
            users
              .filter((user) => user.login.uuid === id)
              .map((user) => (
                <UserDetails
                  key={user.login.uuid}
                  name={user.name}
                  avatar={user.picture}
                  birthday={user.dob}
                  gender={user.gender}
                  adress={user.location}
                  phone={user.phone}
                  registered={user.registered}
                />
              ))}
        </>
      ) : (
        <p>Select a user to see their info</p>
      )}
    </>
  );
}
