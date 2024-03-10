import { FunctionComponent } from 'react';
import { ListCardsProps } from './ListCards.interface';
import { List } from './ListCards.styles';
import { MovieCard } from '../MovieCard';

export const ListCards: FunctionComponent<ListCardsProps> = ({
  cards,
  onAddItem,
}) => {
  return (
    <List>
      {cards?.map((card) => (
        <MovieCard
          key={card.id}
          image={card.image}
          title={card.title}
          price={card.price}
          onAddItem={() => onAddItem(card?.id)}
        />
      ))}
    </List>
  );
};
