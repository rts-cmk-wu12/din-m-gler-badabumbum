import { ENDPOINTS } from '../config/api';
import { fetchApi } from './api';
import type { LoginCredentials, AuthResponse } from '../types/auth';

export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  return fetchApi<AuthResponse>(ENDPOINTS.auth.login, {
    method: 'POST',
    body: credentials,
  });
}

export function saveAuthToken(token: string): void {
  localStorage.setItem('auth_token', token);
}

export function getAuthToken(): string | null {
  return localStorage.getItem('auth_token');
}

export function removeAuthToken(): void {
  localStorage.removeItem('auth_token');
}

export function isAuthenticated(): boolean {
  return !!getAuthToken();
}
