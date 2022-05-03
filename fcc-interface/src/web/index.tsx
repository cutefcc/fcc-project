import ReactDOM from "react-dom/client";
import { fnNormalTask } from "@mmfcc/home";
import { useAsyncFn } from "@mmfcc/hooks";
// import App from "./App";

function App() {
  const [state, doFetch] = useAsyncFn(async () => {
    const res = await fnNormalTask();
    console.log("res", res);
    return res;
  });
  return (
    <div className="App">
      <span>App</span>
      <>
        {state.loading && <div>Loading...</div>}
        {state.error && !state.loading && (
          <div>Error: {state.error.message}</div>
        )}
        {!state.loading && !state.error && (
          <div>value: {state.value?.userId}</div>
        )}
      </>
      <button onClick={() => doFetch()}>Fetch</button>
    </div>
  );
}
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
