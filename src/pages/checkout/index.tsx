import { CheckoutCard, Header, Layout } from '@/components';

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
