'use client'

import { useState } from 'react';

// Formulario básico - Como Reactive Forms en Angular

export default function BasicForm() {
  // En Angular:
  // loginForm = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(6)])
  // });

  // En React: cada campo es un useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  // Validación manual (en Angular usarías Validators)
  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email inválido';
    }

    if (!password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (password.length < 6) {
      newErrors.password = 'Mínimo 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();  // Como en Angular

    if (validate()) {
      console.log('Form válido:', { email, password });
      alert(`Login exitoso!\nEmail: ${email}`);
      // Aquí harías el fetch/POST
    }
  };

  return (
    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
      <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
        Formulario Básico (Controlled)
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo Email */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black dark:text-white">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-3 py-2 border rounded bg-white dark:bg-zinc-800 text-black dark:text-white ${
              errors.email ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-600'
            }`}
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Campo Password */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black dark:text-white">
            Contraseña
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-3 py-2 border rounded bg-white dark:bg-zinc-800 text-black dark:text-white ${
              errors.password ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-600'
            }`}
            placeholder="******"
          />
          {errors.password && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">
              {errors.password}
            </p>
          )}
        </div>

        {/* Botón Submit */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium"
        >
          Iniciar Sesión
        </button>
      </form>

      <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded text-sm">
        <p className="text-zinc-700 dark:text-zinc-300 font-bold mb-1">
          💡 Controlled Component:
        </p>
        <p className="text-zinc-700 dark:text-zinc-300 font-mono text-xs">
          value={'{'}email{'}'} onChange={'{'}(e) ={'>'} setEmail(e.target.value){'}'}
        </p>
        <p className="text-zinc-700 dark:text-zinc-300 mt-2">
          <strong>Angular:</strong> [(ngModel)]="email" o formControlName="email"
        </p>
      </div>
    </div>
  );
}
