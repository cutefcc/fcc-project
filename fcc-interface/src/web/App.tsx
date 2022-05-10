import { fnNormalTask } from "@mmfcc/home";
import { useAsyncFn } from "@mmfcc/hooks";
function App() {
  const [state, doFetch] = useAsyncFn(async () => {
    const res = await fnNormalTask();
    return res;
  });
  return (
    <div className="App">
      <span>cutefcc</span>
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

export default App;
