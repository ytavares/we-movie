import styled from 'styled-components';

export const Card = styled.div`
  background: ${(props) => props.theme.color.white.main};
  border-radius: ${(props) => props.theme.border.radius};
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding: 0 24px 24px 24px;
`;

export const CardTable = styled.table`
  border-bottom: 1px solid ${(props) => props.theme.color.gray.light};
  margin-bottom: 24px;
  padding-bottom: 24px;
  width: 100%;
  border-spacing: 0;
  tr {
    th:nth-child(1) {
      width: 280px;
    }
    th:nth-child(2) {
      width: 348px;
    }
    th:nth-child(3) {
      width: 348px;
    }
    th:nth-child(4) {
      max-width: 24px;
      width: 24px;
    }
  }
  th {
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: ${(props) => props.theme.color.gray.light};
  }
  td,
  th {
    padding: 24px 0 0 0;
  }
  td {
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: ${(props) => props.theme.color.gray.main};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const MovieTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
  color: ${(props) => props.theme.color.gray.main};
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const MovieValue = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
  color: ${(props) => props.theme.color.gray.main};
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MovieImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    object-fit: contain;
  }
`;

export const MovieContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;

export const TotalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 16px;
  }
`;

export const TotalFooterTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  margin: 0;
  width: 61.47px;
  margin-right: 5px;
  color: ${(props) => props.theme.color.gray.light};
  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const TotalFooterValue = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: center;
  margin: 0;
  width: 130.79px;
  color: ${(props) => props.theme.color.gray.main};
  @media (max-width: 768px) {
    text-align: right;
  }
`;

export const DeleteButton = styled.button`
  max-width: 24px;
  max-height: 24px;
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  img {
    object-fit: contain;
  }
`;

export const QuantityButton = styled.button`
  max-width: 18px;
  max-height: 18px;
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  img {
    object-fit: contain;
  }
`;

export const QuantityBox = styled.div`
  display: flex;
  gap: 11px;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const QuantityInput = styled.input`
  text-align: center;
  border: 1px solid ${(props) => props.theme.color.gray.third};
  border-radius: ${(props) => props.theme.border.radius};
  max-width: 62px;
  width: 100%;
  height: 26px;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  color: ${(props) => props.theme.color.gray.main};
`;

// Content related to the card on mobile

export const CardContentMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 1px solid ${(props) => props.theme.color.gray.light};
    padding: 21px 0;
    margin-bottom: 21px;
  }
`;

export const CardMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }
`;

export const CardContentMobileInfo = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }
`;

export const CardContentMobileInfoData = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
`;

export const CardContentMobileInfoSubtotalQuantity = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
`;

export const CardContentMobileSubtotal = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: ${(props) => props.theme.color.gray.main};
  }
`;

export const CardContentMobileSubtotalTitle = styled.p`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;

    color: ${(props) => props.theme.color.gray.third};
  }
`;
