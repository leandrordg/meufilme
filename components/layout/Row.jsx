import { FiChevronRight } from 'react-icons/fi';
import Card from './Card';
import CardSeries from './CardSeries';

const Row = ({ title, data, type }) => {
  return (
    <section className="py-8 pl-4 sm:pl-8 md:pl-16">
      <div className="flex items-center space-x-2 mb-6 text-neutral-500">
        <span className="text-lg">{title}</span>
        <FiChevronRight className="h-6 w-6" />
      </div>

      <div className="flex items-center space-x-2 scrollbar-thin overflow-x-scroll">
        {type === 'movies' &&
          data.results.map((movie, index) => {
            return <Card key={index} movie={movie} />;
          })}
        {type === 'series' &&
          data.results.map((serie, index) => {
            return <CardSeries key={index} serie={serie} />;
          })}
      </div>
    </section>
  );
};

export default Row;
