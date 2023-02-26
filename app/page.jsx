import Banner from '@/components/layout/Banner';
import Row from '@/components/layout/Row';

const getTopRatedMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`
  );
  return res.json();
};

const getTrendingMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`
  );
  return res.json();
};

const getPopularSeries = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`
  );
  return res.json();
};

const getTopRatedSeries = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`
  );
  return res.json();
};

const Page = async () => {
  const popularSeries = await getPopularSeries();
  const topRatedSeries = await getTopRatedSeries();
  const topRatedMovies = await getTopRatedMovies();
  const trendingMovies = await getTrendingMovies();

  return (
    <>
      {topRatedSeries && (
        <Banner title="Séries mais avaliadas" series={topRatedSeries} />
      )}

      {trendingMovies && (
        <Row
          title="Filmes em alta da semana"
          data={trendingMovies}
          type="movies"
        />
      )}
      {popularSeries && (
        <Row title="Séries populares" data={popularSeries} type="series" />
      )}
      {topRatedMovies && (
        <Row
          title="Filmes mais avaliados"
          data={topRatedMovies}
          type="movies"
        />
      )}
    </>
  );
};

export default Page;
