import { useContext } from 'react';
import { AuthContextData, AuthContext } from '../contexts/AuthContext';

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
