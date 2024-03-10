export interface MovieCardProps {
  id?: number;
  title: string;
  price: number;
  image: string;
  itemsInCart?: number;
  quantity?: number;
  onAddItem: () => void;
}
