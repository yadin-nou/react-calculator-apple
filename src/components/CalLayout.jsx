import { useEffect } from "react";
import { Button } from "./Button";
const keyAllowed = "0123456789+-*/.%Enter=";
const CalLayout = ({ btnData }) => {
  const getData = (e) => {
    btnData(e.target.innerText);
  };

  useEffect(() => {
    // use effect to render only one time when key down
    const handleKeydwon = (e) => {
      if (keyAllowed.includes(e.key) || e.key === "Backspace") {
        btnData(String(e.key));
      }
    };
    window.addEventListener("keydown", handleKeydwon);
    return () => {
      window.removeEventListener("keydown", handleKeydwon);
    };
    // The effect re-attaches whenever a new btnData arrives from the parent:
  }, [btnData]);

  const btnObj = [
    { btnCl: "btn-ac", label: "AC" },
    { btnCl: "btn-c", label: "C" },
    { btnCl: "btn-mod", label: "%" },
    { btnCl: "btn-divide", label: "/" },
    { btnCl: "btn-7", label: "7" },
    { btnCl: "btn-8", label: "8" },
    { btnCl: "btn-9", label: "9" },
    { btnCl: "btn-mul", label: "*" },
    { btnCl: "btn-4", label: "4" },
    { btnCl: "btn-5", label: "5" },
    { btnCl: "btn-6", label: "6" },
    { btnCl: "btn-minus", label: "-" },
    { btnCl: "btn-1", label: "1" },
    { btnCl: "btn-2", label: "2" },
    { btnCl: "btn-3", label: "3" },
    { btnCl: "btn-plus", label: "+" },
    { btnCl: "btn-0", label: "0" },
    { btnCl: "btn-dot", label: "." },
    { btnCl: "btn-equal", label: "=" },
  ];

  return (
    <>
      {btnObj.map((btn, index) => (
        <Button
          key={index}
          getData={getData}
          label={btn.label}
          cls={btn.btnCl}
        />
      ))}
    </>
  );
};

export default CalLayout;
