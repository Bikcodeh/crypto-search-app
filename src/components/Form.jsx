import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import SelectField from "./SelectField";
import { BASE_URL, coins } from "../utils";
import useAxios from "../hooks/useAxios";
import Loading from "./Loading";
import Error from "./Error";
import { useCryptoStore } from "../store/store";

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

const initialFormData = {
  currency: "",
  coin: "",
};

export const Form = () => {
  const [hasError, setHasError] = useState(null);
  const [coinsApi, setCoinsApi] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  const { loading, data: dataAxios, error } = useAxios(BASE_URL);
  const setData = useCryptoStore((state) => state.setData);
  const data = useCryptoStore((state) => state.data);

  const onSelectCurrency = (value) => {
    setFormData((state) => ({
      ...state,
      currency: value,
    }));
  };

  const onSelectCoin = (value) => {
    setFormData((state) => ({
      ...state,
      coin: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.coin === "" && formData.currency === "") {
      setHasError("All field are required.");
      return;
    }
    setHasError(null);
    searchData();
  };

  const searchData = async () => {
    try {
      const resp = await fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${formData.coin}&tsyms=${formData.currency}`
      );
      const result = await resp.json();
      const coinData = result.DISPLAY[formData.coin][formData.currency];
      setData(coinData);
      setHasError(null);
    } catch (error) {
      setHasError("An error happened fetching data, please try again.");
    }
  };

  useEffect(() => {
    if (dataAxios) {
      const newCoins = dataAxios.Data.map((cripto) => ({
        id: cripto.CoinInfo.Name,
        name: cripto.CoinInfo.FullName,
      }));
      setCoinsApi(newCoins);
    }
  }, [dataAxios]);

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <form>
      {hasError && <Error>{hasError}</Error>}
      <SelectField
        label="Choose Currency"
        options={coins}
        onSelect={onSelectCurrency}
      />
      <SelectField
        label="Choose Coin"
        options={coinsApi}
        onSelect={onSelectCoin}
      />
      <ButtonSubmit onClick={handleSubmit}>Search</ButtonSubmit>
    </form>
  );
};
