import BackButton from '@/components/buttons/BackButton';
import Card from '@/components/layout/Card';
import 'moment/locale/pt-br';
import moment from 'moment/moment';
import { HiStar } from 'react-icons/hi';

const getMovieById = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`
  );
  return res.json();
};

const getRecomendations = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`
  );
  return res.json();
};

const getReviews = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`
  );
  return res.json();
};

const Page = async ({ params }) => {
  const { filmeId } = params;
  const movie = await getMovieById(filmeId);
  const recommendations = await getRecomendations(filmeId);
  const reviews = await getReviews(filmeId);

  return (
    <>
      {/* Informacoes gerais */}
      <div className="px-4 sm:px-8 md:px-16">
        <BackButton />

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 my-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="md:w-64 h-auto rounded-md"
          />
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              {movie.adult && (
                <span className="bg-black rounded-md text-white px-2">+18</span>
              )}
              <span className="text-2xl font-light">{movie.title}</span>
              <span className="text-sm text-neutral-500">
                {new Date(movie.release_date).getFullYear()}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {movie.genres?.map((genre) => (
                <div key={genre.id} className="bg-neutral-200 rounded-md px-2">
                  <span className="text-sm text-neutral-500">{genre.name}</span>
                </div>
              ))}
              <div
                className={
                  movie.vote_average?.toFixed(1) > 6
                    ? 'text-green-500 bg-green-200 border-green-300 border rounded-md px-2'
                    : 'text-orange-500 bg-orange-200 border-orange-300 border rounded-md px-2'
                }
              >
                <span className="text-sm">
                  {movie.vote_average?.toFixed(1)}
                </span>
              </div>
              <span className="text-neutral-500">
                {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m.
              </span>
            </div>
            <p className="text-sm text-neutral-500 mt-2">
              {movie.overview
                ? movie.overview
                : 'Este filme não tem descrição.'}
            </p>
          </div>
        </div>
      </div>

      {/* Avaliacoes */}
      <div className="bg-neutral-50">
        <div className="px-4 sm:px-8 md:px-16 py-4 sm:py-8">
          <span className="text-xl">Todas as avaliações</span>
          <span className="text-sm text-neutral-500 ml-2">
            {reviews.total_results}
          </span>

          <div className="flex flex-col my-4 space-y-4">
            {reviews.total_results === 0 && (
              <span className="text-neutral-500">
                Ainda não há avaliações disponíveis, tente outra hora novamente.
              </span>
            )}
            {reviews.results?.map((review) => (
              <div key={review.id} className="flex flex-col">
                <div className="flex items-center space-x-2">
                  {review.author_details.avatar_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`}
                      alt={review.author_details.name}
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex justify-center items-center">
                      {review.author_details.name[0]}
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-col">
                      <span className="text-sm">
                        {review.author_details.name}
                      </span>
                      <span className="text-xs text-neutral-500">
                        {review.author_details.username}
                      </span>
                    </div>

                    <div
                      className={`flex items-center space-x-1 ${
                        review.author_details.rating > 6
                          ? 'text-yellow-400'
                          : 'text-orange-400'
                      }`}
                    >
                      <HiStar className="h-6 w-6" />
                      <span className="text-sm">
                        {review.author_details.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <textarea
                  className="text-xs w-full p-4 my-2"
                  defaultValue=""
                  disabled
                  value={review.content}
                />
                <div className="flex flex-col space-y-2 px-4">
                  <span className="text-xs text-neutral-500">
                    Criado há {moment(review.created_at).fromNow()}
                  </span>
                  <span className="text-xs text-neutral-500">
                    Atualiado há {moment(review.updated_at).fromNow()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Relacionados */}
      <div className="mt-8 bg-neutral-50">
        <div className="pl-4 sm:pl-8 md:pl-16 py-4 sm:py-8">
          <span className="text-xl">Você talvez pode gostar</span>
          <div className="flex items-center space-x-2 overflow-x-scroll scrollbar-thin mt-4">
            {recommendations.results?.map((movie) => {
              return <Card key={movie.id} movie={movie} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
