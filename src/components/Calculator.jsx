import { useState, useEffect } from "react";
import CalLayout from "./CalLayout";

export const Calculator = ({ displayData }) => {
  const [data, setData] = useState("");
  const operation = "+-/*%";
  const btnData = (btn) => {
    if (btn === "AC") {
    }
    if (btn === "C") {
    }
    if (btn === "=") {
    }
    if (operation.includes(btn)) {
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
