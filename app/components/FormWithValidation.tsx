'use client'

import { useState } from 'react';

// Formulario con validación avanzada - Como Validators en Angular

interface Errors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function FormWithValidation() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());

  // Validadores (como Validators.required, Validators.email en Angular)
  const validators = {
    username: (value: string) => {
      if (!value) return 'Usuario requerido';
      if (value.length < 3) return 'Mínimo 3 caracteres';
      if (!/^[a-zA-Z0-9_]+$/.test(value)) return 'Solo letras, números y guión bajo';
      return '';
    },
    email: (value: string) => {
      if (!value) return 'Email requerido';
      if (!/\S+@\S+\.\S+/.test(value)) return 'Email inválido';
      return '';
    },
    password: (value: string) => {
      if (!value) return 'Contraseña requerida';
      if (value.length < 8) return 'Mínimo 8 caracteres';
      if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
        return 'Debe tener mayúsculas, minúsculas y números';
      }
      return '';
    },
    confirmPassword: (value: string) => {
      if (!value) return 'Confirmar contraseña';
      if (value !== password) return 'Las contraseñas no coinciden';
      return '';
    },
  };

  // Validar todo el formulario
  const validateAll = () => {
    const newErrors: Errors = {
      username: validators.username(username),
      email: validators.email(email),
      password: validators.password(password),
      confirmPassword: validators.confirmPassword(confirmPassword),
    };

    // Filtrar errores vacíos
    Object.keys(newErrors).forEach(key => {
      if (!newErrors[key as keyof Errors]) {
        delete newErrors[key as keyof Errors];
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validar un campo individual (on blur)
  const validateField = (field: keyof Errors) => {
    const fieldValidators = {
      username: () => validators.username(username),
      email: () => validators.email(email),
      password: () => validators.password(password),
      confirmPassword: () => validators.confirmPassword(confirmPassword),
    };

    const error = fieldValidators[field]();
    setErrors(prev => ({
      ...prev,
      [field]: error,
    }));
  };

  const handleBlur = (field: keyof Errors) => {
    setTouched(prev => new Set(prev).add(field));
    validateField(field);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Marcar todos como touched
    setTouched(new Set(['username', 'email', 'password', 'confirmPassword']));

    if (validateAll()) {
      alert('✅ Registro exitoso!\n\nDatos válidos, listo para enviar al servidor.');
      console.log({ username, email, password });
    }
  };

  const shouldShowError = (field: keyof Errors) => {
    return touched.has(field) && errors[field];
  };

  return (
    <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
      <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
        Validación Avanzada (como Validators)
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Username */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black dark:text-white">
            Usuario
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={() => handleBlur('username')}
            className={`w-full px-3 py-2 border rounded bg-white dark:bg-zinc-800 text-black dark:text-white ${
              shouldShowError('username') ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-600'
            }`}
          />
          {shouldShowError('username') && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">
              {errors.username}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black dark:text-white">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => handleBlur('email')}
            className={`w-full px-3 py-2 border rounded bg-white dark:bg-zinc-800 text-black dark:text-white ${
              shouldShowError('email') ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-600'
            }`}
          />
          {shouldShowError('email') && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black dark:text-white">
            Contraseña
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => handleBlur('password')}
            className={`w-full px-3 py-2 border rounded bg-white dark:bg-zinc-800 text-black dark:text-white ${
              shouldShowError('password') ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-600'
            }`}
          />
          {shouldShowError('password') && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">
              {errors.password}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black dark:text-white">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={() => handleBlur('confirmPassword')}
            className={`w-full px-3 py-2 border rounded bg-white dark:bg-zinc-800 text-black dark:text-white ${
              shouldShowError('confirmPassword') ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-600'
            }`}
          />
          {shouldShowError('confirmPassword') && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-medium"
        >
          Registrarse
        </button>
      </form>

      <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded text-sm">
        <p className="text-zinc-700 dark:text-zinc-300 font-bold mb-1">
          💡 Validación como Angular:
        </p>
        <p className="text-zinc-700 dark:text-zinc-300 text-xs">
          <strong>Angular:</strong> Validators.required, Validators.email, Validators.minLength(8)
        </p>
        <p className="text-zinc-700 dark:text-zinc-300 text-xs">
          <strong>React:</strong> Funciones custom de validación + onBlur para UX
        </p>
      </div>
    </div>
  );
}
