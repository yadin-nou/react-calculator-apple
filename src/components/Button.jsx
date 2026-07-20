export const Button = ({ getData, label, cls }) => {
  console.log(label);
  return (
    <div className={"btn " + cls} onClick={getData}>
      {label}
    </div>
  );
};
