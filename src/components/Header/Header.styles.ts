import styled from 'styled-components';

export const HeaderBox = styled.header`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1080px;
  padding: 0 16px;
  height: 88px;
`;

export const HeaderLogo = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.theme.color.white.main};
`;

export const CartBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
`;

export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 0;
`;

export const CartInfoTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.theme.color.white.main};
  margin: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const CartInfoItems = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.theme.color.gray.light};
  margin: 0;
`;

export const CartIcon = styled.div`
  max-width: 40px;
  max-height: 40px;
  width: 100%;
  height: 100%;
  padding: 8px;
  img {
    object-fit: contain;
  }
`;
