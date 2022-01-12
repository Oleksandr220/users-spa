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

interface IDetails{
  name: {
    first: String;
    last: String;
  };
  picture: {
    medium?: string;
      large?: string;
  };
  dob: {
      date: Date;
  };
  location: {
      country: String;
      city: String;
      street: {
        name: String;
        number: Number;
      }
  };
  phone: Number;
    registered: {
      date: Date;
    };
  gender: String;
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

export {IUser, IDetails, IStore}