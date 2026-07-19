const CalLayout = ({ btnData }) => {
  const getData = (e) => {
    btnData(e.target.innerText);
  };
  return (
    <>
      <div className="btn btn-ac" onClick={getData}>
        AC
      </div>
      <div className="btn btn-c" onClick={getData}>
        C
      </div>
      <div className="btn btn-mod" onClick={getData}>
        %
      </div>
      <div className="btn btn-divide" onClick={getData}>
        /
      </div>
      <div className="btn btn-7" onClick={getData}>
        7
      </div>
      <div className="btn btn-8" onClick={getData}>
        8
      </div>
      <div className="btn btn-9" onClick={getData}>
        9
      </div>
      <div className="btn btn-mul" onClick={getData}>
        *
      </div>
      <div className="btn btn-4" onClick={getData}>
        4
      </div>
      <div className="btn btn-5" onClick={getData}>
        5
      </div>
      <div className="btn btn-6" onClick={getData}>
        6
      </div>
      <div className="btn btn-minus" onClick={getData}>
        -
      </div>
      <div className="btn btn-1" onClick={getData}>
        1
      </div>
      <div className="btn btn-2" onClick={getData}>
        2
      </div>
      <div className="btn btn-3" onClick={getData}>
        3
      </div>
      <div className="btn btn-plus" onClick={getData}>
        +
      </div>
      <div className="btn btn-0" onClick={getData}>
        0
      </div>
      <div className="btn btn-dot" onClick={getData}>
        .
      </div>
      <div className="btn btn-equal" onClick={getData}>
        =
      </div>
    </>
  );
};

export default CalLayout;
