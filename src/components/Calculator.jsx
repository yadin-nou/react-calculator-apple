import { useState } from "react";
import CalLayout from "./CalLayout";

export const Calculator = ({ displayData }) => {
  const [data, setData] = useState("");
  const operator = ["+", "-", "/", "*", "%"];
  const btnData = (btn) => {
    // condition with  AC
    if (btn === "AC") {
      setData("");
      btn = "";
    }
    //condition with  C
    if (btn === "C") {
      setData(data.slice(0, -1));
      btn = "";
    }
    // condition with "."
    if (btn === ".") {
      if (data.slice(-1) === btn) {
        btn = "";
      } else if (data.includes(btn)) {
        operator.forEach((item, index) => {
          if (String(data).lastIndexOf(item, -1)) {
            if (data.includes(item)) {
              console.log(data.split(item));
              return;
            }
          }
        });
        //  console.log(opHas);
        // if (!data.includes(operator)) {
        //   console.log("no operator");
        //   btn = "";
        // } else {
        //   console.log("data include: ", btn);
        // }
      }
    }
    // condition with operator =
    if (btn === "=") {
    }

    // condition with any operator
    if (operator.includes(btn)) {
    }

    setData((oldData) => oldData + btn);
  };
  displayData(data);
  return (
    <>
      <CalLayout btnData={btnData} />
    </>
  );
};
