import styled from "@emotion/styled";
import React, { useState, useCallback } from "react";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
`;

const SelectField = React.memo(({ label, options, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleOnSelect = useCallback((e) => {
    const value = e.target.value;
    setSelectedValue(value);
    onSelect(value);
  }, [options]);
  return (
    <>
      <Label>{label}</Label>
      <Select value={selectedValue} onChange={handleOnSelect}>
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
    </>
  );
});

export default SelectField;
