import Link from 'next/link';

const Card = ({ movie }) => {
  return (
    <Link href={`/filmes/${movie.id}`}>
      <div className="rounded-md relative min-w-[200px] h-auto overflow-hidden">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
            className="h-full w-full object-cover"
          />
        )}
      </div>
    </Link>
  );
};

export default Card;
