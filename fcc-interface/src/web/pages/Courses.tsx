import {
  getState,
  setState,
  subscribe,
  destroy,
  changeState,
  store,
} from "@store/store";
import create from "zustand";
const useStore = create(store);
function Courses() {
  const { name } = useStore();
  console.log("courses render", name);
  const changeFn = () => {
    if (true) {
      changeState();
    }
  };
  return (
    <div>
      <h2>Courses</h2>
      {/* <Outlet /> */}
      <button onClick={changeFn}>changeState</button>
      name: {name}
    </div>
  );
}

export default Courses;
