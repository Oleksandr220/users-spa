interface IUser {
user: {
    name: {
      first: String;
      last: String;
    };
  picture: {
    medium?: string;
      large?: string;
    };
    gender: String;
    location: {
      country: String;
      city: String;
      street: {
        name: String;
        number: Number;
      }
    };
    dob: {
      date: Date;
    };
    phone: Number;
    registered: {
      date: Date;
    };
    login: {
      uuid: string;
    }
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
    users: IUser[];
    loading: Boolean;
  }
}

export {IUser, IStore}