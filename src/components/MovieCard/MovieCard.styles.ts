import styled from 'styled-components';

export const Card = styled.div`
  background: ${(props) => props.theme.color.white.main};
  max-width: 338.67px;
  max-height: 324px;
  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: ${(props) => props.theme.border.radius};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const CardImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  position: relative;
  img {
    object-fit: contain;
  }
`;

export const CardTitle = styled.h3`
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${(props) => props.theme.color.gray.secondary};
  margin: 0;
  margin-bottom: 8px;
`;

export const CardValue = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  color: ${(props) => props.theme.color.gray.main};
  margin: 0;
  margin-bottom: 8px;
`;
