import React from "react";

const ColorSchemePicker = ({ onColorSchemeChange }) => {
  const handleColorSchemeChange = (e) => {
    const selectedColorScheme = e.target.value;
    onColorSchemeChange(selectedColorScheme);
  };

  return (
    <select className="scheme-colour"onChange={handleColorSchemeChange}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
};

export default ColorSchemePicker;
