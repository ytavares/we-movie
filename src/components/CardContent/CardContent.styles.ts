import styled from 'styled-components';

export const Card = styled.div`
  background: ${(props) => props.theme.color.white.main};
  border-radius: ${(props) => props.theme.border.radius};
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding: 24px;
`;

export const CardTable = styled.table`
  border-bottom: 1px solid ${(props) => props.theme.color.gray.light};
  margin-bottom: 24px;
  width: 100%;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const TotalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalFooterTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  margin: 0;
  color: ${(props) => props.theme.color.gray.light};
`;

export const TotalFooterValue = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: center;
  margin: 0;
`;
