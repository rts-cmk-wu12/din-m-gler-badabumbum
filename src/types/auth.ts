export interface LoginCredentials {
  identifier: string;
  password: string;
}

export interface AuthResponse {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    // Add other user fields as needed
  };
}

export interface AuthError {
  statusCode: number;
  error: string;
  message: string[];
}
