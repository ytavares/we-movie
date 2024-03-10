import { FunctionComponent } from 'react';
import { MovieCardProps } from './MovieCard.interface';
import { Card, CardImage, CardTitle, CardValue } from './MovieCard.styles';
import Image from 'next/image';
import { Button } from '../Button';

export const MovieCard: FunctionComponent<MovieCardProps> = ({
  image,
  title,
  price,
  itemsInCart,
  onAddItem,
}) => {
  const formattedValue: string = `R$ ${price.toFixed(2).replace('.', ',')}`;
  return (
    <Card>
      <CardImage>
        <Image
          src={image}
          width={147}
          height={188}
          alt="Picture of movie"
          priority
        />
      </CardImage>
      <CardTitle>{title}</CardTitle>
      <CardValue>{formattedValue}</CardValue>
      <Button
        text="ADICIONAR AO CARRINHO"
        onClick={onAddItem}
        variant="icon"
        numberOfItemsAdded={itemsInCart}
        fullWidth
      />
    </Card>
  );
};
