export const Display = ({ data }) => {
  //console.log(data);
  return <div className="display arbutus-regular">{data ? data : "0.0"}</div>;
};
