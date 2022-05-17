import {
  getState,
  setState,
  subscribe,
  destroy,
  changeState,
  store,
} from "@store/testZustand";
function Home() {
  return (
    <div>
      <h2>Home</h2>
      <h2>{getState().name}</h2>
    </div>
  );
}

export default Home;
