import { FunctionComponent } from 'react';
import { CardContentProps } from './CardContent.interface';
import {
  Card,
  CardFooter,
  CardTable,
  TotalFooter,
  TotalFooterTitle,
  TotalFooterValue,
} from './CardContent.styles';
import { Button } from '../Button';
import { useRouter } from 'next/router';

export const CardContent: FunctionComponent<CardContentProps> = ({
  movies,
  onDelete,
}) => {
  const router = useRouter();

  const subtotal = (value: number, quantity: number) => {
    const total = value * quantity;
    const formattedTotal = `R$ ${total.toFixed(2).replace('.', ',')}`;
    return formattedTotal;
  };

  const handleRedirect = () => {
    router.push('/checkout');
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
          {movies.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{subtotal(item.price, item.quantity ?? 1)}</td>
              <td>
                <button onClick={() => onDelete(item.id)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </CardTable>
      <CardFooter>
        <Button
          text="FINALIZAR PEDIDO"
          variant="default"
          onClick={handleRedirect}
        />
        <TotalFooter>
          <TotalFooterTitle>TOTAL</TotalFooterTitle>
          <TotalFooterValue>R$ 29,90</TotalFooterValue>
        </TotalFooter>
      </CardFooter>
    </Card>
  );
};
