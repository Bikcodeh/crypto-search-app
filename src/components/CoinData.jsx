import styled from "@emotion/styled";
import { useCryptoStore } from "../store/store";

const Data = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Image = styled.img`
  display: block;
  width: 120px;
`;

const Text = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Price = styled.p`
  font-size: 25px;
  span {
    font-weight: 700;
  }
`;

const CoinData = () => {
  const data = useCryptoStore((state) => state.data);
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    data;
  return (
    <Data>
      <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="Image coin" />
      <div>
        <Price>
          Current price: <span>{PRICE}</span>
        </Price>
        <Text>
          Highest price of the day: <span>{HIGHDAY}</span>
        </Text>
        <Text>
          Lowest price of the day: <span>{LOWDAY}</span>
        </Text>
        <Text>
          Variation last 24 hours: <span>{CHANGEPCT24HOUR}</span>
        </Text>
        <Text>
          Last updated: <span>{LASTUPDATE}</span>
        </Text>
      </div>
    </Data>
  );
};

export default CoinData;
