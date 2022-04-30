// import str from "@fcc/core";
type DemoData = {
  userId: number;
  user: string;
  error: null | Error;
};
const normalTask = () => {
  return new Promise<DemoData>((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      console.log('random', random);
      if (random > 0.5) {
        resolve({
          userId: random,
          user: 'fcc',
          error: null,
        });
      } else {
        reject({
          userId: 0,
          user: '',
          error: new Error('test'),
        });
      }
    }, 1000);
  });
};
export { normalTask };
