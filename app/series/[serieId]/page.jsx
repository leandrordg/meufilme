import BackButton from '@/components/buttons/BackButton';
import CardSeries from '@/components/layout/CardSeries';
import SerieModal from '@/components/modals/SerieModal';
import moment from 'moment';
import 'moment/locale/pt-br';
import { HiStar } from 'react-icons/hi';

const getSerieById = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`
  );
  return res.json();
};

const getSimilarSeries = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`
  );
  return res.json();
};

const getSerieReviews = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`
  );
  return res.json();
};

const Page = async ({ params }) => {
  const { serieId } = params;
  const serie = await getSerieById(serieId);
  const similar = await getSimilarSeries(serieId);
  const reviews = await getSerieReviews(serieId);

  return (
    <>
      <div className="px-4 sm:px-8 md:px-16">
        <BackButton />

        <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4 space-y-4 md:space-y-0">
          <img
            src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
            alt={serie.title}
            className="sm:w-64 h-auto rounded-md"
          />
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              {serie.adult && (
                <span className="bg-black rounded-md text-white px-2">+18</span>
              )}
              <span className="text-2xl font-light">{serie.name}</span>
              <span className="text-sm text-neutral-500">
                {new Date(serie.first_air_date).getFullYear()}
              </span>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              {serie.genres?.map((genre) => (
                <div
                  key={genre.id}
                  className="bg-neutral-200 rounded-md px-2 w-fit"
                >
                  <span className="text-sm text-neutral-500">{genre.name}</span>
                </div>
              ))}
              <div
                className={
                  serie.vote_average?.toFixed(1) > 6
                    ? 'text-green-500 bg-green-200 border-green-300 border rounded-md px-2'
                    : 'text-orange-500 bg-orange-200 border-orange-300 border rounded-md px-2'
                }
              >
                <span className="text-sm">
                  {serie.vote_average?.toFixed(1)}
                </span>
              </div>

              {/* Temporadas */}
              <span className="text-neutral-500 text-sm">
                {serie.number_of_seasons === 1
                  ? '1 temporada'
                  : `${serie.number_of_seasons} temporadas`}
              </span>
            </div>

            {/* Descricao */}
            <p className="text-sm text-neutral-500 mt-4">
              {serie.overview
                ? serie.overview
                : 'Este filme não tem descrição.'}
            </p>
          </div>
        </div>

        <div className="flex flex-col rounded-md my-8">
          <span className="text-lg text-neutral-600">
            Último episódio no ar
          </span>
          <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-4 space-y-4 my-4">
            <div className="flex-1">
              <SerieModal
                serie={JSON.parse(JSON.stringify(serie.last_episode_to_air))}
                type="image"
              />
            </div>
            <div className="flex flex-col flex-[3]">
              <span className="text-lg font-semibold">
                {serie.last_episode_to_air.name}
              </span>

              <div className="flex items-center space-x-2">
                <span className="text-sm">
                  Episódio {serie.last_episode_to_air.episode_number}
                </span>

                <span>|</span>

                <span className="text-sm">
                  {Math.floor(serie.last_episode_to_air.runtime / 60)}h{' '}
                  {serie.last_episode_to_air.runtime % 60}m.
                </span>
              </div>

              <p className="text-sm text-neutral-500 my-4">
                {serie.last_episode_to_air.overview
                  ? serie.last_episode_to_air.overview
                  : 'Episódio não tem descrição.'}
              </p>

              <SerieModal
                serie={JSON.parse(JSON.stringify(serie.last_episode_to_air))}
                type="button"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-y">
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
              <div key={review.id} className="flex flex-col bg-gray-50 p-2 sm:p-4 rounded-xl">
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
                  className="text-xs w-full my-2 bg-transparent"
                  defaultValue=""
                  disabled
                  value={review.content}
                />
                <div className="flex flex-col space-y-2">
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

      <div className="bg-neutral-50 mt-8">
        <div className="pl-4 sm:pl-8 md:pl-16 py-4">
          <span className="text-xl">Séries semelhantes</span>
          <div className="flex items-center space-x-2 overflow-x-scroll scrollbar-thin mt-4">
            {similar.results.map((similar) => {
              return <CardSeries key={similar.id} serie={similar} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
