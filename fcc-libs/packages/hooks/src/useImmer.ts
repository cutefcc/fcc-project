import { useCallback, useState } from 'react';
import produce, { freeze, Draft } from "immer";
export type DraftFunction<S> = (draft: Draft<S>) => void;
export type Updater<S> = (update: S | DraftFunction<S>) => void;
export type ImmerHooks<S> = [S, Updater<S>];
// 函数签名-用来限制具体的实现-签名就是对外的外衣，一般写库会这样搞   【要么写函数签名，要么就写到函数实现里面去】
// 函数签名 可以类比 interface         class implements
/*interface A {
    log(str: string): string;
}
class B implements A {
    log(str: string) {
        return str;
    }
}*/
export function useImmer<S = unknown>(initValue: S | (() => S)): ImmerHooks<S>;

// 函数实现
export function useImmer(initValue: unknown) {
    const [val, setVal] = useState(freeze(typeof initValue === 'function' ? initValue() : initValue, true));
    // useCallback 的原理是把函数搞到全局，避免传递给子组件时导致memo不生效
    return [val, useCallback((update) => {
        if (typeof update === 'function') {
            setVal(produce(update));
        } else {
            setVal(freeze(update));
        }
    }, [])];
}

