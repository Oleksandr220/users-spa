interface User {
user: {
    name: {
      first?: String;
      last?: String;
    };
    picture: {
      large?: string;
    };
    gender: String;
    location: {
      country?: String;
      city?: String;
      street: {
        name?: String;
        number?: Number;
      }
    };
    dob: {
      date: String;
    };
    phone: Number;
    registered: {
      date?: String;
    };
  };
  login: {
    uuid: string;
  }
}

interface IStore {
  authReducer: {
    auth: Boolean;
  };
  usersReducer: {
    users: User[];
    loading: Boolean;
  }
}

export {User, IStore}