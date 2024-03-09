import { FunctionComponent } from 'react';
import { HeaderProps } from './Header.interface';
import {
  CartBox,
  CartIcon,
  CartInfo,
  CartInfoItems,
  CartInfoTitle,
  HeaderBox,
  HeaderLogo,
} from './Header.styles';
import Image from 'next/image';
import cartIcon from '../../../public/icons/cart-icon.svg';

export const Header: FunctionComponent<HeaderProps> = ({
  totalItems,
  cartTitle,
}) => {
  return (
    <HeaderBox>
      <HeaderLogo>WeMovies</HeaderLogo>
      <CartBox>
        <CartInfo>
          <CartInfoTitle>{cartTitle}</CartInfoTitle>
          <CartInfoItems>{totalItems} itens</CartInfoItems>
        </CartInfo>
        <CartIcon>
          <Image src={cartIcon} alt="Picture of cart icon" />
        </CartIcon>
      </CartBox>
    </HeaderBox>
  );
};
