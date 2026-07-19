import { useState } from "react";
import "./App.css";
import { Calculator } from "./components/Calculator";
import { Display } from "./components/Display";

function App() {
  const [data, setData] = useState("");
  const displayData = (btnData) => {
    //console.log(data);
    setData(btnData);
  };
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
