import styled from "@emotion/styled";
import SelectField from "./SelectField";
import { BASE_URL, coins } from "../utils";
import { useEffect } from "react";
import useAxios from "../hooks/useAxios";

const ButtonSubmit = styled.button`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 20px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

export const Form = () => {
  const { loading, data, error } = useAxios(BASE_URL);

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <form>
      <SelectField
        label="Choose coin"
        options={coins}
        onSelect={(value) => ''}
      />
      <SelectField label="Choose coin" options={coins} />
      {
        data && <h4>Data</h4>
      }
      <ButtonSubmit>Search</ButtonSubmit>
    </form>
  );
};
