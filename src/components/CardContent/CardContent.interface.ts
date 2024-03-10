import { MovieCardProps } from '../MovieCard';

export interface CardContentProps {
  movies: MovieCardProps[];
  onDelete: (id?: number) => void;
}
