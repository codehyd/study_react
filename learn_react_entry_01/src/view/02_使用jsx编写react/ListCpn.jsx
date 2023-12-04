import React from "react";

function ListContent({ list }) {
  return list.map((item) => <ItemContent key={item.id} {...item} />);
}

function ItemContent({ name, age, height }) {
  return (
    <div>
      姓名: {name} 年龄: {age} 身高: {height}
    </div>
  );
}

function ListCpn() {
  const list = [
    { id: 1, name: "张三", age: 18, height: 1.88 },
    { id: 2, name: "李四", age: 19, height: 1.78 },
    { id: 3, name: "王五", age: 20, height: 1.68 },
  ];

  return (
    <div>
      <h2>列表渲染</h2>
      <ListContent list={list} />
    </div>
  );
}

export default ListCpn;
