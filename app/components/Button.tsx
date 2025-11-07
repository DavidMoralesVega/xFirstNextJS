'use client'

// Props con callbacks = como @Output() en Angular

// En Angular:
// export class ButtonComponent {
//   @Output() btnClick = new EventEmitter<string>();
//   onClick() {
//     this.btnClick.emit('Botón presionado');
//   }
// }

interface ButtonProps {
  label: string;
  onClick: (message: string) => void;  // ← Como @Output() en Angular
  variant?: 'primary' | 'secondary' | 'danger';
}

export default function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  const styles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
  };

  return (
    <button
      onClick={() => onClick(`${label} fue presionado!`)}
      className={`px-4 py-2 rounded font-medium transition ${styles[variant]}`}
    >
      {label}
    </button>
  );
}
