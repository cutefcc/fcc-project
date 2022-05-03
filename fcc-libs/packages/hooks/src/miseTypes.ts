export type FuctionReturnPromise = (...args: any[]) => Promise<any>;
export type PromiseType<T> = T extends Promise<infer U> ? U : T;