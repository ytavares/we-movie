import styled from 'styled-components';

export const LoaderBox = styled.div`
  width: 83px;
  height: 83px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  img {
    width: 100%;
    height: 100%;
    max-width: 62.25px;
    max-height: 62.25px;

    animation: spin 2s linear infinite;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;
