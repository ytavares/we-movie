import styled from 'styled-components';

export const ButtonComponent = styled.button<{
  $fullWidth?: boolean;
  $numberOfItemsAdded?: number;
}>`
  padding: 11px 8px;
  border-radius: ${(props) => props.theme.border.radius};
  min-width: 173px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  background: ${(props) =>
    props.$numberOfItemsAdded ?? 0 > 0
      ? props.theme.color.secundary.main
      : props.theme.color.primary.main};
  width: ${(props) => (props.$fullWidth ? '100%' : '173px')};
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${(props) => props.theme.color.white.main};
`;
export const AddCartIcon = styled.div`
  width: 13.6px;
  height: 13.6px;
  img {
    object-fit: contain;
  }
`;
export const AddCartBox = styled.div`
  max-width: 24.93px;
  max-height: 17px;
  display: flex;
  gap: 3.4px;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${(props) => props.theme.color.white.main};
`;
