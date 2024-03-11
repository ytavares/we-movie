import { FunctionComponent, useEffect, useState } from 'react';
import { CardContentProps } from './CardContent.interface';
import {
  Card,
  CardContentMobile,
  CardContentMobileInfo,
  CardContentMobileInfoData,
  CardContentMobileInfoSubtotalQuantity,
  CardContentMobileSubtotal,
  CardContentMobileSubtotalTitle,
  CardFooter,
  CardMobile,
  CardTable,
  DeleteButton,
  MovieContent,
  MovieImage,
  MovieInfo,
  MovieTitle,
  MovieValue,
  QuantityBox,
  QuantityButton,
  QuantityInput,
  TotalFooter,
  TotalFooterTitle,
  TotalFooterValue,
} from './CardContent.styles';
import { Button } from '../Button';
import { useRouter } from 'next/router';
import deleteIcon from '../../../public/icons/delete-icon.svg';
import plusIcon from '../../../public/icons/plus-icon.svg';
import minusIcon from '../../../public/icons/minus-icon.svg';
import Image from 'next/image';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { useConvertToReal } from '../../../hooks/useConvertToReal';

export const CardContent: FunctionComponent<CardContentProps> = ({
  movies,
  onDelete,
  onAddMovie,
}) => {
  const router = useRouter();
  const isBreakpoint = useMediaQuery(768);

  const handleAddQuantity = (id?: number) => {
    onAddMovie(id);
  };

  const handleSubtractQuantity = (id?: number) => {
    onDelete(id, true);
  };

  const formatValue = (value: number) => {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
  };

  const subtotal = (value: number, quantity: number) => {
    const total = value * quantity;
    return formatValue(total);
  };

  const quantity = (id?: number) => {
    return movies.filter((movie) => movie.id === id).length;
  };

  const totalMovies = movies.filter(
    (movie, index, self) => index === self.findIndex((m) => m.id === movie.id),
  );

  const totalValue = totalMovies.reduce(
    (acc, item) => acc + item.price * quantity(item.id),
    0,
  );

  const formattedTotalValue = useConvertToReal(totalValue);

  const handleRedirect = () => {
    router.push('/checkout');
    movies.forEach((movie) => onDelete(movie.id, true));
  };

  return (
    <Card>
      <CardTable>
        <thead>
          <tr>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {totalMovies.map((item, index) => {
            const tot = quantity(item.id);
            return (
              <tr key={index}>
                <td>
                  <MovieContent>
                    <MovieImage>
                      <Image
                        src={item.image}
                        width={91}
                        height={114}
                        alt="Picture of movie"
                        priority
                      />
                    </MovieImage>
                    <MovieInfo>
                      <MovieTitle>{item.title}</MovieTitle>
                      <MovieValue>{formatValue(item.price)}</MovieValue>
                    </MovieInfo>
                  </MovieContent>
                </td>
                <td>
                  <QuantityBox>
                    <QuantityButton
                      onClick={() => handleSubtractQuantity(item.id)}
                    >
                      <Image src={minusIcon} alt="Picture of minus icon" />
                    </QuantityButton>
                    <QuantityInput
                      type="text"
                      value={quantity(item.id)}
                      readOnly
                    />
                    <QuantityButton onClick={() => handleAddQuantity(item.id)}>
                      <Image src={plusIcon} alt="Picture of plus icon" />
                    </QuantityButton>
                  </QuantityBox>
                </td>
                <td>{subtotal(item.price, tot)}</td>
                <td>
                  <DeleteButton onClick={() => onDelete(item.id)}>
                    <Image src={deleteIcon} alt="Picture of delete icon" />
                  </DeleteButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </CardTable>
      <CardContentMobile>
        {totalMovies.map((item, index) => {
          const tot = quantity(item.id);
          return (
            <CardMobile key={index}>
              <MovieImage>
                <Image
                  src={item.image}
                  width={91}
                  height={114}
                  alt="Picture of movie"
                  priority
                />
              </MovieImage>
              <CardContentMobileInfo>
                <CardContentMobileInfoData>
                  <MovieTitle>{item.title}</MovieTitle>
                  <MovieValue>{formatValue(item.price)}</MovieValue>
                  <DeleteButton onClick={() => onDelete(item.id)}>
                    <Image src={deleteIcon} alt="Picture of delete icon" />
                  </DeleteButton>
                </CardContentMobileInfoData>
                <CardContentMobileInfoSubtotalQuantity>
                  <QuantityBox>
                    <QuantityButton
                      onClick={() => handleSubtractQuantity(item.id)}
                    >
                      <Image src={minusIcon} alt="Picture of minus icon" />
                    </QuantityButton>
                    <QuantityInput
                      type="text"
                      value={quantity(item.id)}
                      readOnly
                    />
                    <QuantityButton onClick={() => handleAddQuantity(item.id)}>
                      <Image src={plusIcon} alt="Picture of plus icon" />
                    </QuantityButton>
                  </QuantityBox>
                  <CardContentMobileSubtotal>
                    <CardContentMobileSubtotalTitle>
                      SUBTOTAL
                    </CardContentMobileSubtotalTitle>
                    {subtotal(item.price, tot)}
                  </CardContentMobileSubtotal>
                </CardContentMobileInfoSubtotalQuantity>
              </CardContentMobileInfo>
            </CardMobile>
          );
        })}
      </CardContentMobile>
      <CardFooter>
        <Button
          text="FINALIZAR PEDIDO"
          variant="default"
          onClick={handleRedirect}
          fullWidth={isBreakpoint}
        />
        <TotalFooter>
          <TotalFooterTitle>TOTAL</TotalFooterTitle>
          <TotalFooterValue>{formattedTotalValue}</TotalFooterValue>
        </TotalFooter>
      </CardFooter>
    </Card>
  );
};
