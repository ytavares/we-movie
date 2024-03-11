import { MovieCardProps } from '../MovieCard';

export interface CardContentProps {
  movies: MovieCardProps[];
  onDelete: (id?: number, single?: boolean) => void;
  onAddMovie: (id?: number) => void;
}
