import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #7a7dfe;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

const Loading = () => {
  return (
    <Center>
      <Loader></Loader>
    </Center>
  );
};

export default Loading;
