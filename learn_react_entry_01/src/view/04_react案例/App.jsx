import React from "react";

const formData = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

const DataList = ({ data }) => {
  const filterData = React.useMemo(() => {
    const classifyData = [];

    data.forEach((item) => {
      // 按category分类 classifyData =  [{category:xxx, children:[]}]
      const index = classifyData.findIndex((classifyItem) => {
        return classifyItem.category === item.category;
      });
      if (index === -1) {
        classifyData.push({ category: item.category, children: [item] });
      } else {
        classifyData[index].children.push(item);
      }
    });

    return classifyData;
  }, [data]);

  const dataListEl = filterData.map((item) => {
    return (
      <div key={item.category}>
        <h3>{item.category}</h3>
        <ul>
          {item.children.map((childItem) => {
            return (
              <li key={childItem.name} style={{ color: !childItem.stocked ? "red" : "" }}>
                {childItem.name} - {childItem.price}
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  const content = filterData.length !== 0 ? <div>{dataListEl}</div> : <div>暂无数据</div>;

  return content;
};

const ProductContainer = ({ data, searchValue, changeInput, isOnly, changeOnly }) => {
  const InputEl = (
    <div>
      <input placeholder="Search..." value={searchValue} onChange={(e) => changeInput(e.target.value)}></input>
    </div>
  );

  const checkEl = (
    <div>
      <label>
        <input type="checkbox" value={isOnly} onChange={(e) => changeOnly(e.target.checked)} />
        Only show products in stock
      </label>
    </div>
  );

  return (
    <div>
      {InputEl}
      {checkEl}
      <DataList data={data} />
    </div>
  );
};

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [isOnly, setIsOnly] = React.useState(false);
  const [dataList, setDataList] = React.useState(formData);
  const onChangeInput = (val) => {
    setSearchValue(val);

    const newData = formData.filter((item) => {
      if (val === "") return true;
      // 大小写不敏感
      return item.name.toLowerCase().indexOf(val.toLowerCase()) !== -1;
    });

    setDataList(newData);
  };

  const onChangeOnly = (val) => {
    setIsOnly(val);

    const newData = formData.filter((item) => {
      if (val) return true;
      return item.stocked;
    });
    setDataList(newData);
  };

  return (
    <div>
      <h2>04_react案例</h2>
      <ProductContainer
        data={dataList}
        searchValue={searchValue}
        changeInput={onChangeInput}
        isOnly={isOnly}
        changeOnly={onChangeOnly}
      />
    </div>
  );
}

export default App;
