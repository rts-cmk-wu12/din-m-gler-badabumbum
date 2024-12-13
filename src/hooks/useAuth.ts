import { useState } from 'react';
import { login, saveAuthToken, removeAuthToken } from '../services/auth';
import type { LoginCredentials, AuthResponse, AuthError } from '../types/auth';

interface UseAuth {
  user: AuthResponse['user'] | null;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

export function useAuth(): UseAuth {
  const [user, setUser] = useState<AuthResponse['user'] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (credentials: LoginCredentials) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await login(credentials);

      saveAuthToken(response.jwt);
      setUser(response.user);
    } catch (err) {
      const authError = err as AuthError;
      setError(Array.isArray(authError.message) ? authError.message[0] : 'Login failed. Please try again.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    removeAuthToken();
    setUser(null);
  };

  return {
    user,
    isLoading,
    error,
    login: handleLogin,
    logout: handleLogout,
  };
}
