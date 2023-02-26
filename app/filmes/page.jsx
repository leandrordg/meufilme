import BackButton from '@/components/buttons/BackButton';
import Row from '@/components/layout/Row';
import moviesRequests from '@/utils/moviesRequests';

const fetchAllMovies = async () => {
  const [
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(moviesRequests.fetchTopRated).then((res) => res.json()),
    fetch(moviesRequests.fetchActionMovies).then((res) => res.json()),
    fetch(moviesRequests.fetchComedyMovies).then((res) => res.json()),
    fetch(moviesRequests.fetchHorrorMovies).then((res) => res.json()),
    fetch(moviesRequests.fetchRomanceMovies).then((res) => res.json()),
    fetch(moviesRequests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  };
};

const Page = async () => {
  const movies = await fetchAllMovies();

  return (
    <>
      <div className="pl-4 sm:pl-8 md:pl-16">
        <BackButton />

        <div className="flex flex-col my-4">
          <span className="text-4xl font-semibold">Filmes</span>
          <p className="text-neutral-500 text-sm">
            Navegue pelos seus filmes favoritos.
          </p>
        </div>
      </div>

      <Row title="Mais avaliados" type="movies" data={movies.topRated} />
      <Row title="Ação" type="movies" data={movies.actionMovies} />
      <Row title="Comédia" type="movies" data={movies.comedyMovies} />
      <Row title="Terror" type="movies" data={movies.horrorMovies} />
      <Row title="Romance" type="movies" data={movies.romanceMovies} />
      <Row title="Documentários" type="movies" data={movies.documentaries} />
    </>
  );
};

export default Page;
