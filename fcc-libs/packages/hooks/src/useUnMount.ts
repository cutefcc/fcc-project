import { useRef } from 'react';
import { useEffectOnce } from './useEffectOnce';

export function useUnMount(fn: () => unknown): void {
  const ref = useRef(fn);
  ref.current = fn;
  useEffectOnce(() => () => {
    ref.current();
  });
}
