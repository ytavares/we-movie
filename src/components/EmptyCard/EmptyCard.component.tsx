import { FunctionComponent } from 'react';
import { EmptyCardProps } from './EmptyCard.interface';
import {
  EmptyCardBox,
  EmptyCardImage,
  EmptyCardTitle,
} from './EmptyCard.styles';
import Image from 'next/image';
import emptyImg from '../../../public/images/empty-img.png';
import { Button } from '../Button';

export const EmptyCard: FunctionComponent<EmptyCardProps> = ({ title }) => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <EmptyCardBox>
      <EmptyCardTitle>{title}</EmptyCardTitle>
      <EmptyCardImage>
        <Image src={emptyImg} alt="Picture of empty img" priority />
      </EmptyCardImage>
      <Button
        text="Recarregar página"
        onClick={handleReload}
        variant="default"
      />
    </EmptyCardBox>
  );
};
