import styled from 'styled-components';

export const CheckoutCardBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${(props) => props.theme.border.radius};
  background: ${(props) => props.theme.color.white.main};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 64px;
  flex-direction: column;
  margin-bottom: 40px;
  padding-bottom: 143.64px;
  @media (max-width: 768px) {
    padding: 64px 45px;
  }
`;

export const CheckoutCardTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
  color: ${(props) => props.theme.color.gray.main};
  margin: 0;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const CheckoutCardImage = styled.div`
  max-width: 294.96px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  img {
    object-fit: contain;
  }
  @media (max-width: 768px) {
    img {
      width: 100%;
      max-height: 234px;
    }
  }
`;
