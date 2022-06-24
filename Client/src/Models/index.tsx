export interface Input {
  type: string;
  placeholder: string;
  key: string;
}

export interface User {
  userID: string;
  account: string;
  userName: string;
  password: string;
  phoneNumber: string;
}

export enum LoadingState {
  loading,
  finished,
  error,
}

export enum Role {
  no = -1,
  users,
  admin,
}

export interface FetchResponse<T> {
  payload?: T[];
  status: number;
  message: string;
}

export interface Validation {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
  custom?: {
    isValid: (value: string) => boolean;
    message: string;
  };
}
