import { EmptyCard } from '@/components/EmptyCard';
import { Header } from '@/components/Header';
import { Layout } from '@/components/Layout';
import { Loader } from '@/components/Loader';

export default function Home() {
  return (
    <>
      <Header totalItems={0} cartTitle="Meu Carrinho" />
      <Layout>
        {/* <Loader /> */}
        <EmptyCard title="Parece que não há nada por aqui :(" />
      </Layout>
    </>
  );
}
