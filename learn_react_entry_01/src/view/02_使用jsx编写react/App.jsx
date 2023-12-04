import ConditionCpn from "./ConditionCpn";
import ListCpn from "./ListCpn";
import MyButton from "./MyButton";
import "./index.css";
function App() {
  const user = "张三";

  return (
    <div>
      <h2>02_使用jsx编写react</h2>
      <MyButton></MyButton>
      <span className="text-red">我的字体是红色的</span>

      <div>显示数据: 我是user数据{user}</div>

      <ConditionCpn />

      <ListCpn />
    </div>
  );
}

export default App;
