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
import { useRouter } from 'next/router';

export const EmptyCard: FunctionComponent<EmptyCardProps> = ({ title }) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/');
  };
  return (
    <EmptyCardBox>
      <EmptyCardTitle>{title}</EmptyCardTitle>
      <EmptyCardImage>
        <Image src={emptyImg} alt="Picture of empty img" priority />
      </EmptyCardImage>
      <Button
        text="Recarregar página"
        onClick={handleRedirect}
        variant="default"
      />
    </EmptyCardBox>
  );
};
