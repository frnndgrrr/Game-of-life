function Cell({ value }) {
  const cellStyling = {
    height: "40px",
    width: "40px",
  };

  return (
    <div
      className={`col text-center rounded-circle bg-gradient bg-${
        value ? "success" : "light"
      }`}
      style={cellStyling}
    ></div>
  );
}

export default Cell;
