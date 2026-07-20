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
      // if (data.slice(-1) === btn || ) {
      //   btn = "";
      // } else if (data.includes(btn)) {
      //   operator.forEach((item, index) => {
      //     if (String(data).lastIndexOf(item, -1)) {
      //       if (data.includes(item)) {
      //         console.log(data.split(item));
      //         return;
      //       }
      //     }
      //   });
      let lastString = "";
      let lastIndex = [];
      operator.forEach((item, index) => {
        //check data has operator or not, if have get only the last index
        // then slice the data by the last index
        if (data.includes(item)) {
          lastIndex.push(Number(data.lastIndexOf(item)));
        }
      });
      //...max can't accept the array, so it accept individual numbers as separate arguments, not an array:
      //find the max number in lastIndex as data have mulitple operator
      let maxIndex = Math.max(...lastIndex);
      lastString = data.slice(maxIndex + 1);
      //console.log(lastString);
      if (lastString.includes(btn)) {
        // console.log(lastIndex, "Last string has dot", lastString);
        btn = "";
      } else {
        // console.log("lastString no Dot");
        btn = btn;
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
