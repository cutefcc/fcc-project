import { useRef, DependencyList } from 'react';
import { useImmer } from './useImmer';
import { useMountedState } from './useMountedState';
import { FuctionReturnPromise, PromiseType } from './miseTypes';
import { useCallback } from 'react';
type AsyncState<T> =
  | {
      loading: boolean;
      error?: undefined;
      value?: undefined;
    }
  | {
      loading: true;
      error?: Error | undefined;
      value?: T;
    }
  | {
      loading: false;
      error?: Error;
      value?: undefined;
    }
  | {
      loading: false;
      error?: undefined;
      value?: T;
    };
// ReturnType 获取函数返回值的类型
// 定义那个state
type StateFromFunctionReturnPromise<T extends FuctionReturnPromise> =
  AsyncState<PromiseType<ReturnType<T>>>;
// 返回的那个数组
type AsyncFnReturn<T extends FuctionReturnPromise> = [
  StateFromFunctionReturnPromise<T>,
  T
];

export function useAsyncFn<T extends FuctionReturnPromise>(
  fn: T,
  deps: DependencyList = [],
  initialState: StateFromFunctionReturnPromise<T> = {
    loading: false,
    error: undefined,
    value: undefined,
  }
): AsyncFnReturn<T> {
  const [state, setState] = useImmer(initialState);
  const isMountedFn = useMountedState();
  const lastCallId = useRef(0);
  // const hooksDeps = [fn, isMounted, state.loading];
  const callback = useCallback(
    (...args: Parameters<T>): ReturnType<T> => {
      const callId = ++lastCallId.current;
      if (!state.loading) {
        setState(draft => {
          draft.loading = true;
          draft.error = undefined;
          draft.value = undefined;
        });
      }
      return fn(...args).then(
        value => {
          if (isMountedFn() && callId === lastCallId.current) {
            console.log('success', value);
            setState(draft => {
              draft.loading = false;
              draft.error = undefined;
              draft.value = value;
            });
            return value;
          }
        },
        error => {
          if (isMountedFn() && callId === lastCallId.current) {
            console.log('error', error);
            setState(draft => {
              draft.loading = false;
              draft.error = error.error;
              draft.value = error;
            });
          }
          return error;
        }
      ) as ReturnType<T>;
    },
    [fn, ...deps]
  );

  return [state, callback as unknown as T];
}
