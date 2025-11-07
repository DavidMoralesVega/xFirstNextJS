'use client'

import { useCart } from '../contexts/CartContext';

// Componente que usa CartContext

const MOCK_PRODUCTS = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Mouse', price: 29 },
  { id: 3, name: 'Teclado', price: 79 },
  { id: 4, name: 'Monitor', price: 299 },
];

export default function CartDemo() {
  const { items, addToCart, removeFromCart, updateQuantity, clearCart, total, itemCount } = useCart();

  return (
    <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
      <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
        Cart Context Demo (Shopping Cart)
      </h3>

      {/* Productos disponibles */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3 text-black dark:text-white">
          Productos disponibles:
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {MOCK_PRODUCTS.map(product => (
            <div
              key={product.id}
              className="p-3 bg-white dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700"
            >
              <p className="font-semibold text-black dark:text-white">{product.name}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 w-full px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm"
              >
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Carrito */}
      <div className="p-4 bg-white dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700">
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-semibold text-black dark:text-white">
            Carrito ({itemCount} items)
          </h4>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-sm text-red-600 dark:text-red-400 hover:underline"
            >
              Vaciar carrito
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            El carrito está vacío
          </p>
        ) : (
          <div className="space-y-2">
            {items.map(item => (
              <div
                key={item.id}
                className="flex items-center justify-between p-2 bg-zinc-50 dark:bg-zinc-700 rounded"
              >
                <div className="flex-1">
                  <p className="font-medium text-black dark:text-white">{item.name}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    ${item.price} x {item.quantity} = ${item.price * item.quantity}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-zinc-200 dark:bg-zinc-600 rounded hover:bg-zinc-300 dark:hover:bg-zinc-500"
                  >
                    -
                  </button>
                  <span className="text-black dark:text-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-zinc-200 dark:bg-zinc-600 rounded hover:bg-zinc-300 dark:hover:bg-zinc-500"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}

            <div className="pt-3 border-t border-zinc-300 dark:border-zinc-600">
              <p className="text-lg font-bold text-black dark:text-white">
                Total: ${total.toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded text-sm">
        <p className="text-zinc-700 dark:text-zinc-300">
          💡 El carrito persiste en <strong>localStorage</strong> (recarga la página y verás!)
        </p>
        <p className="text-zinc-700 dark:text-zinc-300 mt-1">
          Como un CartService en Angular con BehaviorSubject
        </p>
      </div>
    </div>
  );
}
