import React from "react";

const InputGroup = ({ type, label, onChange, name }) => {
  return (
    <div className="inputGroup">
      <span>{label}</span>
      <input type={type || "text"} name={name} onChange={onChange} />
    </div>
  );
};

export default InputGroup;
