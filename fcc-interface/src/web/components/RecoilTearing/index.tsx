import { useEffect, useState } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE,
  useRecoilValue,
} from "recoil";
const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "init recoil value", // default value (aka initial value)
});
let c = 0;
const RecoilTearing = () => {
  console.log("页面渲染了 - RecoilTearing", ++c);
  const [count, setCount] = useState(0);
  const [text, setText] = useRecoilState_TRANSITION_SUPPORT_UNSTABLE(textState);
  useEffect(() => {}, []);
  return (
    <div className="tearing">
      test Tearing
      <div>
        <div>count:{count}</div>
        <div>text:{text}</div>

        <button onClick={() => setCount(Math.random())}>change count</button>
        <button onClick={() => setText(Math.random().toString())}>
          change text
        </button>
      </div>
    </div>
  );
};
export default RecoilTearing;
