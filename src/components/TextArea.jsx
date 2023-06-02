import React from "react";

const TextArea = ({ value, onChange, rows, cols }) => {
  return <textarea value={value} onChange={onChange} rows={rows} cols={cols} />;
};

export default TextArea;
