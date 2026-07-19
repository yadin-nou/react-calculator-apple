export const Display = ({ data }) => {
  //console.log(data === "" ? "yes" : "no");
  return <div className="display arbutus-regular">{data ? data : "0.0"}</div>;
};
