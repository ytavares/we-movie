import { MovieCardProps } from '../MovieCard';

export interface ListCardsProps {
  cards: MovieCardProps[];
  cartMovies: MovieCardProps[];
  onAddItem: (id?: number) => void;
}
