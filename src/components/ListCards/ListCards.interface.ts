import { MovieCardProps } from '../MovieCard';

export interface ListCardsProps {
  cards: MovieCardProps[];
  onAddItem: (id?: number) => void;
}
