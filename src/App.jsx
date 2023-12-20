import styled from "@emotion/styled";
import { Form } from "./components/Form";
import { useCryptoStore } from "./store/store";
import { useEffect } from "react";
import CoinData from "./components/CoinData";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App() {
  const data = useCryptoStore((state) => state.data);

  return (
    <Container>
      <Image src="/assets/img/imagen-criptos.png" alt="Crypto images" />
      <div>
        <Heading>Quote Cryptocurrencies Instantly</Heading>
        <Form />
        {data && <CoinData />}
      </div>
    </Container>
  );
}

export default App;
