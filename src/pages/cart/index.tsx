import {
  CardContent,
  EmptyCard,
  Header,
  Layout,
  Loader,
  MovieCardProps,
} from '@/components';
import api from '@/service/api';
import { useEffect, useState } from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = useState<MovieCardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  const handleAddMovie = async (id?: number) => {
    try {
      setIsLoading(true);

      const newMovieOnCart = cartItems.filter((movie) => movie.id === id);

      await api.post('/cart', newMovieOnCart[0]);
      getCartMovies();
    } catch (error) {
      alert(`Error when requesting to add film to cart:  ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteItemFromCart = async (id?: number, single?: boolean) => {
    try {
      setIsLoading(true);

      if (single) {
        await api.delete(`/cart/${id}`);
      } else {
        await Promise.all(
          cartItems
            .filter((item) => item.id === id)
            .map((item) => api.delete(`/cart/${item.id}`)),
        );
      }
      getCartMovies();
    } catch (error) {
      alert(`Error when deleting movie from cart:  ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCartMovies();
  }, []);

  if (isLoading)
    return (
      <>
        <Header totalItems={cartItems.length} cartTitle="Meu Carrinho" />
        <Loader />
      </>
    );

  return (
    <>
      <Header totalItems={cartItems.length} cartTitle="Meu Carrinho" />
      <Layout>
        {cartItems.length > 0 ? (
          <CardContent
            movies={cartItems}
            onDelete={handleDeleteItemFromCart}
            onAddMovie={handleAddMovie}
          />
        ) : (
          <EmptyCard title="Parece que não há nada por aqui :(" />
        )}
      </Layout>
    </>
  );
}
