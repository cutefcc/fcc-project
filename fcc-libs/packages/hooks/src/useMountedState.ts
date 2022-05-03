import { useRef, useEffect, useCallback } from "react";

/**
 * 判断组件是否已经Mounted
 * @returns () => {}
 * 调用方式：
 * const isMountedFn = useMountedState()
 * isMountedFn()
 */
export function useMountedState() {
  const mounted = useRef<boolean>(false);
  const getMounted = useCallback(() => mounted.current, []);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return getMounted;
}
