'use client'

import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

// Componente que usa AuthContext (como AuthService en Angular)

export default function AuthDemo() {
  const { user, isAuthenticated, login, logout, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      alert('Error al iniciar sesión');
    }
  };

  if (loading) {
    return (
      <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <div className="flex items-center gap-3">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <span className="text-black dark:text-white">Iniciando sesión...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
      <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
        Auth Context Demo
      </h3>

      {!isAuthenticated ? (
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
              Email (usa "admin@test.com" para rol admin)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded bg-white dark:bg-zinc-800 text-black dark:text-white"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded bg-white dark:bg-zinc-800 text-black dark:text-white"
              placeholder="******"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Iniciar Sesión
          </button>
        </form>
      ) : (
        <div className="space-y-4">
          <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded">
            <p className="text-green-800 dark:text-green-300 font-bold mb-2">
              ✅ Sesión iniciada
            </p>
            <p className="text-black dark:text-white">
              <strong>Nombre:</strong> {user?.name}
            </p>
            <p className="text-black dark:text-white">
              <strong>Email:</strong> {user?.email}
            </p>
            <p className="text-black dark:text-white">
              <strong>Rol:</strong> {user?.role}
            </p>
          </div>

          <button
            onClick={logout}
            className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Cerrar Sesión
          </button>
        </div>
      )}

      <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded text-sm">
        <p className="text-zinc-700 dark:text-zinc-300">
          💡 El estado del usuario es <strong>global</strong> y accesible desde cualquier componente
        </p>
        <p className="text-zinc-700 dark:text-zinc-300 mt-2">
          Como un Service en Angular con providedIn: 'root'
        </p>
      </div>
    </div>
  );
}
