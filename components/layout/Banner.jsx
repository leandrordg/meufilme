import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

const Banner = ({ series, title }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-8 pl-4 sm:pl-8 md:pl-16">
      <div className="flex items-center space-x-2 mb-8">
        <span className="text-2xl">{title}</span>
        <FiChevronRight className="h-6 w-6" />
      </div>

      <div className="flex items-center space-x-2 overflow-x-scroll scrollbar-thin">
        {series.results.map((serie) => (
          <Link key={serie.id} href={`/series/${serie.id}`}>
            <div className="w-64 h-auto rounded-md hover:shadow overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.name}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Banner;
