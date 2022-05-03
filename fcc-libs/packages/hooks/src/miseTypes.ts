export type FuctionReturnPromise = (...args: any[]) => Promise<any>;
export type PromiseType<T> = T extends Promise<infer U> ? U : T;

const a = new Promise((resolve, reject) => {
  resolve('a');
});
const b: PromiseType<typeof a> = 3;
console.log(b);
