import { ReactNode } from 'react'
import styled from "@emotion/styled";


interface Props {
  children: ReactNode;
}

const ErrorText = styled.div`
  background-color: #b7322c;
  color: #fff;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: 700;
`;

const Error = ({ children }: Props) => {
  return <ErrorText>{children}</ErrorText>;
};

export default Error;
