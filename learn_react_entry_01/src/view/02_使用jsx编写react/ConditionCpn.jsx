import React from "react";

function showCpn(text) {
  return <div>{text}我是需要显示的内容</div>;
}

function ConditionCpn() {
  const [flag, setFlag] = React.useState(false);

  const onClickShow = () => {
    setFlag(true);
  };

  const onClickHide = () => {
    setFlag(false);
  };

  return (
    <div>
      <h2>条件渲染</h2>
      <button onClick={onClickShow}>点击show</button>
      <button onClick={onClickHide}>点击hide</button>
      {/* 使用&& 显示showCpn  */}
      {flag && showCpn("我使用的是&&")}
      {/* 使用三元表达式 显示showCpn  */}
      {flag ? showCpn("我使用的是三元表达式") : null}
      {/* 使用逻辑或|| 显示showCpn */}
      {flag || showCpn("我使用的是逻辑或||")}
    </div>
  );
}

export default ConditionCpn;
