import create from "zustand/vanilla";
// test zustand/vanilla 不依赖react
const DEFAULT_STORE = {
  name: "cutefcc",
  age: 31,
};

const store = create(() => ({ ...DEFAULT_STORE }));
const { getState, setState, subscribe, destroy } = store;

function changeState() {
  setState({
    name: "cutefcc-new" + Math.random(),
  });
}
// subscribe((draft) => {
//   console.log(draft);
// });
export { getState, setState, subscribe, destroy, changeState, store };
