import { FunctionComponent } from 'react';
import { ButtonProps } from './Button.interface';
import { AddCartBox, AddCartIcon, ButtonComponent } from './Button.styles';
import Image from 'next/image';
import addCartIcon from '../../../public/icons/add-card-icon.svg';

export const Button: FunctionComponent<ButtonProps> = ({
  text,
  variant,
  numberOfItemsAdded,
  fullWidth,
  onClick,
}) => {
  return (
    <ButtonComponent
      $fullWidth={fullWidth}
      $numberOfItemsAdded={numberOfItemsAdded}
      onClick={onClick}
    >
      {variant === 'icon' && (
        <AddCartBox>
          <AddCartIcon>
            <Image src={addCartIcon} alt="Picture of add cart icon" />
          </AddCartIcon>
          {numberOfItemsAdded}
        </AddCartBox>
      )}
      {text}
    </ButtonComponent>
  );
};
