import create from "zustand/vanilla";
// 解决Re-render 问题
import { immer } from "zustand/middleware/immer";

// test zustand/vanilla 不依赖react
const DEFAULT_STORE = {
  name: "cutefcc",
  age: 31,
};

// const store = create(() => ({ ...DEFAULT_STORE }));
const store = create(
  immer<typeof DEFAULT_STORE>((set) => ({ ...DEFAULT_STORE }))
);
const { getState, setState, subscribe, destroy } = store;

function changeState() {
  console.log("changeState");
  // setState({
  //   name: "cutefcc-new" + Math.random(),
  // });
  // 这样写 会触发Re-render 是bad case, 引入zustand/middleware/immer 就可以解决这个问题
  // setState({ name: "cutefcc", age: 31 });
  // 这样写是good case
  setState((draft) => {
    draft.name = "cutefcc";
    draft.age = 31;
  });
}
// subscribe((draft) => {
//   console.log(draft);
// });
export { getState, setState, subscribe, destroy, changeState, store };
