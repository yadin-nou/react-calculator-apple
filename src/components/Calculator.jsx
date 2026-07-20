import { useState } from "react";
import CalLayout from "./CalLayout";

export const Calculator = ({ displayData }) => {
  const [data, setData] = useState("");
  const operator = ["+", "-", "/", "*", "%"];

  const btnData = (btn) => {
    //console.log(btn);

    // condition with  AC
    if (btn === "AC") {
      setData("");
      btn = "";
    }
    //condition with  C
    if (btn === "C" || btn === "Backspace") {
      setData(data.slice(0, -1));
      btn = "";
    }
    // condition with "."
    if (btn === ".") {
      let lastString = "";
      let lastIndex = [];
      operator.forEach((item, index) => {
        //check data has operator or not, if have get only the last index
        // then slice the data by the last index and push to array lastIndex
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
        // if laststring has dot, not allow to type
        btn = "";
      } else {
        // if lastString No dot, allow to type
        btn = btn;
      }
    }
    // condition with operator =
    if (btn === "=" || btn === "Enter") {
      btn = "";
      setData(eval(data));
    }
    // condition with any operator
    if (operator.includes(btn)) {
      // let lastString = "";
      let lastIndex = [];
      if (data === "") {
        btn !== "-" ? (btn = "0" + btn) : (btn = btn);
      } else {
        // if data have operator at the last index
        lastIndex = data.slice(-1);
        if (operator.includes(lastIndex)) {
          let oldData = data.slice(0, data.length - 1);
          setData(oldData);
        } else {
          //if data not have operator at the last index
          btn = btn;
        }
      }
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
