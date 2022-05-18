// import {
//   getState,
//   setState,
//   subscribe,
//   destroy,
//   changeState,
//   store,
// } from "@store/testZustand";
import { useImmer } from "@mmfcc/hooks";
function Home() {
  const [a, setA] = useImmer({ a: 1 });
  console.log("home render");
  return (
    <div>
      <h2>Home</h2>
      {/* <h2>{getState().name}</h2> */}
      <p
        onClick={() => {
          setA((draft) => {
            draft.a = 1;
          });
        }}
      >
        a: {a.a}
      </p>
    </div>
  );
}

export default Home;
