// Props = como @Input() en Angular

// En Angular:
// export class UserCardComponent {
//   @Input() name!: string;
//   @Input() age!: number;
//   @Input() role?: string;
// }

interface UserCardProps {
  name: string;
  age: number;
  role?: string;  // ← Opcional (como en Angular)
}

export default function UserCard({ name, age, role = 'Usuario' }: UserCardProps) {
  // Destructuring de props (puedes hacer: props.name, props.age también)

  return (
    <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg shadow border border-zinc-200 dark:border-zinc-700">
      <h3 className="text-xl font-bold text-black dark:text-white">{name}</h3>
      <p className="text-zinc-600 dark:text-zinc-400">Edad: {age} años</p>
      <p className="text-sm text-zinc-500 dark:text-zinc-500">Rol: {role}</p>
    </div>
  );
}
