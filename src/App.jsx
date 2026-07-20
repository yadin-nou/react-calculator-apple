import { useState } from "react";
import "./App.css";
import { Calculator } from "./components/Calculator";
import { Display } from "./components/Display";

function App() {
  const [data, setData] = useState("");
  // const [keys, setKeys] = useState(null);
  const displayData = (btnData) => {
    //console.log(data);
    setData(btnData);
  };
  // const keyboardPress = (e) => {
  //   setKeys(e.key);
  //   // console.log(e.key);
  // };
  return (
    <div className="wrapper DisplayFlex">
      <div className="calculator">
        <Display data={data} />
        <Calculator displayData={displayData} />
      </div>
    </div>
  );
}

export default App;
