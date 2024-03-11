import { FunctionComponent } from 'react';
import { ListCardsProps } from './ListCards.interface';
import { List } from './ListCards.styles';
import { MovieCard } from '../MovieCard';

export const ListCards: FunctionComponent<ListCardsProps> = ({
  cards,
  cartMovies,
  onAddItem,
}) => {
  const quantityOfItemInCart = (id?: number) => {
    return cartMovies?.filter((item) => item.id === id).length;
  };
  return (
    <List>
      {cards?.map((card) => (
        <MovieCard
          key={card.id}
          image={card.image}
          title={card.title}
          price={card.price}
          itemsInCart={quantityOfItemInCart(card.id)}
          onAddItem={() => onAddItem(card?.id)}
        />
      ))}
    </List>
  );
};
