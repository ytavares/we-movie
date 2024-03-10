import { CardContent } from '@/components/CardContent/CardContent.component';
import { Header } from '@/components/Header';
import { Layout } from '@/components/Layout';

export default function Cart() {
  return (
    <>
      <Header totalItems={0} cartTitle="Meu Carrinho" />
      <Layout>
        <CardContent movies={[]} onDelete={() => {}} />
      </Layout>
    </>
  );
}
