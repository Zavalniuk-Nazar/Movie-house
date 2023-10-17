import React, { useCallback } from "react";
import "./Selector.css";
import classNames from "classnames";
import { RxCross1 } from "react-icons/rx";

function Selector({
  className,
  data = [],
  children,
  currentOption = "",
  setCurrentOption,
  ...props
}) {
  const classNameSelect = classNames(`${className}-filter`, "select-mf");

  const options = data.map((value, index) => {
    return (
      <option value={value} key={index}>
        {value}
      </option>
    );
  });

  const onHandleChange = useCallback(
    (e) => {
      setCurrentOption(e.target.value);
    },
    [setCurrentOption]
  );

  const clearSelec = useCallback(() => {
    setCurrentOption("");
  }, [setCurrentOption]);

  return (
    <div className="select-multi-filter">
      <select
        className={classNameSelect}
        value={currentOption}
        onChange={onHandleChange}
      >
        <option value="">{children}</option>
        {options}
      </select>
      <div
        className="clear-select"
        title="Очистити фільтр"
        onClick={clearSelec}
      >
        <RxCross1 size={12} />
      </div>
    </div>
  );
}

export default Selector;