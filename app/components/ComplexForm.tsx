'use client'

import { useState } from 'react';

// Formulario complejo - Como FormGroup con nested FormControls

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  role: string;
  newsletter: boolean;
}

export default function ComplexForm() {
  // En Angular sería:
  // userForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  //   country: new FormControl(''),
  //   role: new FormControl(''),
  //   newsletter: new FormControl(false)
  // });

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    role: 'user',
    newsletter: false,
  });

  const [submitted, setSubmitted] = useState(false);

  // Función helper para actualizar un campo
  // En Angular usarías: this.userForm.patchValue({ firstName: value })
  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      role: 'user',
      newsletter: false,
    });
    setSubmitted(false);
  };

  return (
    <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
      <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
        Formulario Complejo (Multiple Fields)
      </h3>

      {submitted ? (
        <div className="space-y-4">
          <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded">
            <p className="text-green-800 dark:text-green-300 font-bold mb-2">
              ✅ Formulario enviado exitosamente!
            </p>
            <pre className="text-sm text-black dark:text-white overflow-x-auto">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Enviar otro formulario
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre y Apellido en grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-black dark:text-white">
                Nombre
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => updateField('firstName', e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded bg-white dark:bg-zinc-800 text-black dark:text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-black dark:text-white">
                Apellido
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => updateField('lastName', e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded bg-white dark:bg-zinc-800 text-black dark:text-white"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded bg-white dark:bg-zinc-800 text-black dark:text-white"
              required
            />
          </div>

          {/* Select - País */}
          <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
              País
            </label>
            <select
              value={formData.country}
              onChange={(e) => updateField('country', e.target.value)}
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded bg-white dark:bg-zinc-800 text-black dark:text-white"
              required
            >
              <option value="">Selecciona un país</option>
              <option value="pe">Perú</option>
              <option value="mx">México</option>
              <option value="ar">Argentina</option>
              <option value="es">España</option>
            </select>
          </div>

          {/* Radio buttons - Rol */}
          <div>
            <label className="block text-sm font-medium mb-2 text-black dark:text-white">
              Rol
            </label>
            <div className="space-y-2">
              {['user', 'admin', 'developer'].map(roleOption => (
                <label key={roleOption} className="flex items-center gap-2 text-black dark:text-white">
                  <input
                    type="radio"
                    name="role"
                    value={roleOption}
                    checked={formData.role === roleOption}
                    onChange={(e) => updateField('role', e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="capitalize">{roleOption}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Checkbox */}
          <div>
            <label className="flex items-center gap-2 text-black dark:text-white">
              <input
                type="checkbox"
                checked={formData.newsletter}
                onChange={(e) => updateField('newsletter', e.target.checked)}
                className="w-4 h-4"
              />
              <span>Suscribirme al newsletter</span>
            </label>
          </div>

          {/* Botones */}
          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 font-medium"
            >
              Enviar
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 bg-zinc-300 dark:bg-zinc-600 text-black dark:text-white rounded hover:bg-zinc-400 dark:hover:bg-zinc-700"
            >
              Limpiar
            </button>
          </div>
        </form>
      )}

      <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded text-sm">
        <p className="text-zinc-700 dark:text-zinc-300">
          💡 <strong>Angular:</strong> this.userForm.value<br/>
          💡 <strong>React:</strong> formData (objeto con todos los valores)
        </p>
      </div>
    </div>
  );
}
