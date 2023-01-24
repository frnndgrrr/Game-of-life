function Cell({ value }) {
  const cellStyling = {
    height: "15px",
    width: "15px",
  };

  return (
    <div
      className={`col rounded-2 bg-gradient bg-${
        value ? "primary" : "light"
      }`}
      style={cellStyling}
    ></div>
  );
}

export default Cell;
