import create from "zustand";
// test zustand
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
export { getState, setState, subscribe, destroy, changeState };
