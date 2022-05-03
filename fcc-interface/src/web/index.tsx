import ReactDOM from "react-dom/client";
import { fnNormalTask } from "@mmfcc/home";
import { useAsyncFn } from "@mmfcc/hooks";
// import App from "./App";

function App() {
  const [state, doFetch] = useAsyncFn(fnNormalTask);
  return <div className="App">App</div>;
}
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
