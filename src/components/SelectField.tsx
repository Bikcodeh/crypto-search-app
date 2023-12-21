import React, { useState, useCallback, ChangeEvent } from "react";
import styled from "@emotion/styled";

import { Currency } from "../interfaces";

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

interface Props {
  label: string;
  options: Currency[];
  onSelect: (value: string) => void;
}

const SelectField = React.memo(({ label, options, onSelect }: Props) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleOnSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
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
