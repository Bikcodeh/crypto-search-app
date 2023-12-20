import styled from "@emotion/styled";

const ErrorText = styled.div`
  background-color: #b7322c;
  color: #fff;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: 700;
`;
const Error = ({ children }) => {
  return <ErrorText>{children}</ErrorText>;
};

export default Error;
