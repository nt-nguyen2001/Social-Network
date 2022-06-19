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
  pending,
  error,
}

// export interface FetchResponse<T> {
//   data: T[];
//   totalPages: number;
// }

export interface FetchResponse {
  data: [];
  totalPages?: number;
  status: number;
  message: string;
}

export interface Validation {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: string;
    message: string;
  };
  custom?: {
    isValid: (value: string) => boolean;
    message: string;
  };
}
