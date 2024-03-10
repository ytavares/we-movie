import { Header } from '@/components/Header';
import { Layout } from '@/components/Layout';
import { CheckoutCard } from '@/components/CheckoutCard';
export default function Checkout() {
  return (
    <>
      <Header totalItems={0} cartTitle="Meu Carrinho" />
      <Layout>
        <CheckoutCard title="Compra realizada com sucesso!" />
      </Layout>
    </>
  );
}
