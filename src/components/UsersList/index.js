import { useState, useEffect } from 'react';

import getRandomaizer from '../../services/randomazerAPI';

export default function UsersList() {
  const [users, setUsers] = useState([]);

  const responseUsers = async function fetchRandomUsers() {
    const result = await getRandomaizer();
    setUsers(result);
  };

  useEffect(() => {
    responseUsers();
  }, []);

  return (
    <ul>
      {users && users.map((user) => <li key={user.cell}>{user.gender}</li>)}
    </ul>
  );
}
