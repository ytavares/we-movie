import { FunctionComponent } from 'react';
import { CheckoutCardProps } from './CheckoutCard.interface';
import {
  CheckoutCardBox,
  CheckoutCardImage,
  CheckoutCardTitle,
} from './CheckoutCard.styles';
import Image from 'next/image';
import checkoutImg from '../../../public/images/checkout-img.png';
import { Button } from '../Button';
import { useRouter } from 'next/router';

export const CheckoutCard: FunctionComponent<CheckoutCardProps> = ({
  title,
}) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/');
  };
  return (
    <CheckoutCardBox>
      <CheckoutCardTitle>{title}</CheckoutCardTitle>
      <CheckoutCardImage>
        <Image src={checkoutImg} alt="Picture of checkout img" priority />
      </CheckoutCardImage>
      <Button text="VOLTAR" onClick={handleRedirect} variant="default" />
    </CheckoutCardBox>
  );
};
