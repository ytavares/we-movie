import { EmptyCard } from '@/components/EmptyCard';
import { Header } from '@/components/Header';
import { Layout } from '@/components/Layout';
import { Loader } from '@/components/Loader';
import { useEffect, useState } from 'react';
import { MovieCardProps } from '@/components/MovieCard';
import { ListCards } from '@/components/ListCards';
import axios from 'axios';
import api from '@/service/api';

export default function Home() {
  const [movies, setMovies] = useState<MovieCardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);

        const response = await api.get('/products');

        setMovies(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  if (isLoading)
    return (
      <>
        <Header totalItems={0} cartTitle="Meu Carrinho" />
        <Loader />
      </>
    );

  return (
    <>
      <Header totalItems={0} cartTitle="Meu Carrinho" />
      <Layout>
        {movies.length > 0 ? (
          <ListCards cards={movies} onAddItem={() => {}} />
        ) : (
          <EmptyCard title="Parece que não há nada por aqui :(" />
        )}
      </Layout>
    </>
  );
}
