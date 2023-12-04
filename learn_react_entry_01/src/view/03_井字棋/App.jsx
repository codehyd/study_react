import React from "react";
import "./css/index.css";

const ticSuccessArrayConfig = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [ticContent, setTicContent] = React.useState(new Array(9).fill(null));
  const [step, setStep] = React.useState(0);
  const [success, setSuccess] = React.useState(false);

  const text = React.useMemo(() => {
    return step % 2 === 0 ? "X" : "O";
  }, [step]);

  const TicWrapper = () => {
    return (
      <div className="tic-content">
        <div>当前落棋的是: {text}</div>
        {ticContent.map((item, index) => (
          <TicItem key={index} value={index + 1} />
        ))}
      </div>
    );
  };

  const TicItem = ({ value }) => {
    const onItemClick = () => {
      // 判断是否已经赢了
      if (success) {
        return alert("已经有人获胜了");
      }
      // 判断当前是否已经下了
      if (ticContent[value - 1] != null) {
        return alert("已经落过棋了");
      }
      // 更新步数
      setStep(step + 1);
      // 更新棋盘数据
      const newTicContent = [...ticContent];
      newTicContent[value - 1] = text;
      setTicContent(newTicContent);

      // 判断是否已经赢了
      const isSuccess = ticSuccessArrayConfig.some((item) => {
        return newTicContent[item[0]] === text && newTicContent[item[1]] === text && newTicContent[item[2]] === text;
      });

      if (isSuccess) {
        alert(`恭喜${text}获胜`);
        setSuccess(true);
      }
    };

    return (
      <div className="tic-item" onClick={onItemClick}>
        {ticContent[value - 1]}
      </div>
    );
  };
  return (
    <div>
      <h2>03_井字棋案例</h2>
      <TicWrapper />
    </div>
  );
}

export default App;
