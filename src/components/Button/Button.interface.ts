export interface ButtonProps {
  variant: 'icon' | 'default';
  text: string;
  numberOfItemsAdded?: number;
  onClick: () => void;
  fullWidth?: boolean;
}
