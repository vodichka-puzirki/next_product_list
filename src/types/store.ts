export type AuthStateType = {
  userInfo: UserType;
};
export type UserType = {
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
};

export type LoadingStateType = {
  loading: boolean;
};

export type ErrorType = {
  code: number;
  message: string;
};

export type ErrorStateType = {
  error: ErrorType;
};
