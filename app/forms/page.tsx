import Link from 'next/link';
import BasicForm from '../components/BasicForm';
import ComplexForm from '../components/ComplexForm';
import FormWithValidation from '../components/FormWithValidation';

export default function FormsPage() {
  return (
    <div className="min-h-screen p-8 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Volver al inicio
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">
          Lección 5: Formularios
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Reactive Forms de Angular vs Controlled Components en React
        </p>

        {/* Sección 1: Formulario básico */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            1. Formulario Básico con Validación
          </h2>
          <BasicForm />
        </div>

        {/* Sección 2: Formulario complejo */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            2. Formulario Complejo (Multiple Fields)
          </h2>
          <ComplexForm />
        </div>

        {/* Sección 3: Validación avanzada */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            3. Validación Avanzada (como Validators)
          </h2>
          <FormWithValidation />
        </div>

        {/* Tabla comparativa */}
        <div className="mt-8 p-6 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            Comparación: Angular Reactive Forms vs React
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-zinc-300 dark:border-zinc-700">
                  <th className="text-left py-2 text-black dark:text-white">Concepto</th>
                  <th className="text-left py-2 text-black dark:text-white">Angular</th>
                  <th className="text-left py-2 text-black dark:text-white">React</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-3 font-semibold">Crear formulario</td>
                  <td className="py-3 font-mono text-xs">
                    new FormGroup({'{'}...{'}'})
                  </td>
                  <td className="py-3 font-mono text-xs">
                    useState para cada campo
                  </td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-3 font-semibold">Campo controlado</td>
                  <td className="py-3 font-mono text-xs">
                    formControlName="email"
                  </td>
                  <td className="py-3 font-mono text-xs">
                    value={'{'}email{'}'}<br/>
                    onChange={'{'}...{'}'}
                  </td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-3 font-semibold">Validación</td>
                  <td className="py-3 font-mono text-xs">
                    Validators.required<br/>
                    Validators.email<br/>
                    Validators.minLength(6)
                  </td>
                  <td className="py-3 font-mono text-xs">
                    Funciones custom<br/>
                    if (!value) return 'error'<br/>
                    if (value.length &lt; 6)...
                  </td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-3 font-semibold">Obtener valor</td>
                  <td className="py-3 font-mono text-xs">
                    this.form.value<br/>
                    this.form.get('email').value
                  </td>
                  <td className="py-3 font-mono text-xs">
                    formData<br/>
                    email
                  </td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-3 font-semibold">Validar form</td>
                  <td className="py-3 font-mono text-xs">
                    this.form.valid
                  </td>
                  <td className="py-3 font-mono text-xs">
                    validate() función custom
                  </td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-3 font-semibold">Errores</td>
                  <td className="py-3 font-mono text-xs">
                    form.get('email').errors
                  </td>
                  <td className="py-3 font-mono text-xs">
                    errors.email (objeto estado)
                  </td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-3 font-semibold">Touched/Dirty</td>
                  <td className="py-3 font-mono text-xs">
                    form.get('email').touched
                  </td>
                  <td className="py-3 font-mono text-xs">
                    touched.has('email')<br/>
                    (Set manual)
                  </td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-3 font-semibold">Reset</td>
                  <td className="py-3 font-mono text-xs">
                    this.form.reset()
                  </td>
                  <td className="py-3 font-mono text-xs">
                    setFormData({'{'}...defaults{'}'})
                  </td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Submit</td>
                  <td className="py-3 font-mono text-xs">
                    (ngSubmit)="onSubmit()"
                  </td>
                  <td className="py-3 font-mono text-xs">
                    onSubmit={'{'}handleSubmit{'}'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Código comparativo */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <h3 className="font-bold text-black dark:text-white mb-3">Angular Reactive Form</h3>
            <pre className="text-xs text-zinc-800 dark:text-zinc-200 overflow-x-auto">
{`import { FormGroup, FormControl, Validators } from '@angular/forms';

export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const data = this.loginForm.value;
      console.log(data);
    }
  }
}

// Template:
<form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
  <input formControlName="email">
  <div *ngIf="loginForm.get('email').errors?.['required']">
    Email requerido
  </div>
</form>`}
            </pre>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="font-bold text-black dark:text-white mb-3">React Controlled Form</h3>
            <pre className="text-xs text-zinc-800 dark:text-zinc-200 overflow-x-auto">
{`'use client'
import { useState } from 'react';

export default function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};
    if (!email) err.email = 'Email requerido';
    if (!password || password.length < 6)
      err.password = 'Mínimo 6 caracteres';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log({ email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <div>{errors.email}</div>}
    </form>
  );
}`}
            </pre>
          </div>
        </div>

        {/* Ventajas y desventajas */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
              Angular Reactive Forms
            </h3>
            <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
              <strong>Ventajas:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li>API completa y robusta</li>
              <li>Validadores built-in</li>
              <li>Validación asíncrona integrada</li>
              <li>FormArray para arrays dinámicos</li>
            </ul>
            <p className="text-sm text-blue-700 dark:text-blue-300 mt-3 mb-2">
              <strong>Desventajas:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li>Más verbose (más código)</li>
              <li>Curva de aprendizaje mayor</li>
              <li>Separado del template</li>
            </ul>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
            <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">
              React Controlled Components
            </h3>
            <p className="text-sm text-green-700 dark:text-green-300 mb-2">
              <strong>Ventajas:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-green-700 dark:text-green-300 space-y-1">
              <li>Más simple y directo</li>
              <li>Todo en un solo archivo</li>
              <li>Flexibilidad total</li>
              <li>Fácil debuggear</li>
            </ul>
            <p className="text-sm text-green-700 dark:text-green-300 mt-3 mb-2">
              <strong>Desventajas:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-green-700 dark:text-green-300 space-y-1">
              <li>Validación manual</li>
              <li>Más repetitivo en forms grandes</li>
              <li>Sin validadores built-in</li>
              <li>Necesita librerías para forms complejos</li>
            </ul>
          </div>
        </div>

        {/* Tip sobre librerías */}
        <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500">
          <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">
            💡 Librerías recomendadas para formularios complejos:
          </h3>
          <div className="text-purple-700 dark:text-purple-300 space-y-2">
            <p>
              <strong>react-hook-form:</strong> La más popular, similar a Reactive Forms de Angular
            </p>
            <p>
              <strong>formik:</strong> Otra opción popular con Yup para validación
            </p>
            <p>
              <strong>zod:</strong> Para validación de schemas TypeScript
            </p>
            <p className="text-sm mt-3">
              Para formularios simples (2-3 campos), usa useState nativo como viste aquí.
              Para formularios grandes (10+ campos), considera react-hook-form.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
