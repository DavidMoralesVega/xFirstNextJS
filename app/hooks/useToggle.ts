'use client'

import { useState, useCallback } from 'react';

// Custom Hook simple para toggle boolean
// Útil para modals, sidebars, etc.

export function useToggle(initialValue: boolean = false): [boolean, () => void, (value: boolean) => void] {
  const [value, setValue] = useState(initialValue);

  // useCallback previene re-creación innecesaria de la función
  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);

  return [value, toggle, setValue];
}
