export type userLoginType = {
  email: string;
  password: string;
};

export type userRegisterType = {
  username: string;
  email: string;
  password: string;
};

export type updateUserType = {
  ID: number;
  username: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  bio: string;
};
