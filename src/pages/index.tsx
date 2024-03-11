import {
  EmptyCard,
  Header,
  Layout,
  ListCards,
  Loader,
  MovieCardProps,
} from '@/components';
import api from '@/service/api';
import { useEffect, useState } from 'react';

export default function Home() {
  const [movies, setMovies] = useState<MovieCardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);
  const [cartItems, setCartItems] = useState<MovieCardProps[]>([]);

  const handleAddMovie = async (id?: number) => {
    try {
      setIsLoading(true);

      const newMovieOnCart = movies.filter((movie) => movie.id === id);

      await api.post('/cart', newMovieOnCart[0]);
      getCartMovies();
    } catch (error) {
      alert(`Error when requesting to add film to cart:  ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const getCartMovies = async () => {
    try {
      setIsLoading(true);

      const response = await api.get('/cart');

      setCartItems(response.data);
    } catch (error) {
      alert(`Error when making a request to list films in the cart:  ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const getMovies = async () => {
    try {
      setIsLoading(true);

      const response = await api.get('/products');

      setMovies(response.data);
    } catch (error) {
      alert(`Error when making a request to list films:  ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCartMovies();
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
      <Header totalItems={cartItems.length} cartTitle="Meu Carrinho" />
      <Layout>
        {movies.length > 0 ? (
          <ListCards
            cards={movies}
            onAddItem={handleAddMovie}
            cartMovies={cartItems}
          />
        ) : (
          <EmptyCard title="Parece que não há nada por aqui :(" />
        )}
      </Layout>
    </>
  );
}
