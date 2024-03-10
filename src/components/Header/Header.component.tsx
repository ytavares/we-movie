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
import Link from 'next/link';

export const Header: FunctionComponent<HeaderProps> = ({
  totalItems,
  cartTitle,
}) => {
  return (
    <HeaderBox>
      <Link href="/">
        <HeaderLogo>WeMovies</HeaderLogo>
      </Link>
      <Link href="/cart">
        <CartBox>
          <CartInfo>
            <CartInfoTitle>{cartTitle}</CartInfoTitle>
            <CartInfoItems>{totalItems} itens</CartInfoItems>
          </CartInfo>
          <CartIcon>
            <Image src={cartIcon} alt="Picture of cart icon" />
          </CartIcon>
        </CartBox>
      </Link>
    </HeaderBox>
  );
};
