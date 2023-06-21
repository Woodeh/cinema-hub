import { FC, useState } from 'react';
import { Movie } from './Movies/Movie';
import './Movies.scss';
import { moviesDb } from '../../constants/moviesDb';
import { ShowMore } from './ShowMore/ShowMore';

interface IMovies {}

interface IMovie {
  title: string;
  from: number;
  to: number;
}

export const Movies: FC<IMovies> = () => {
  const [showMoreCount, setShowMoreCount] = useState(4);
  const [movies] = useState<IMovie[]>(moviesDb);

  const handleCountShowFilms = () => {
    if (showMoreCount === -1 || showMoreCount + 4 >= movies.length) {
      setShowMoreCount(-1);
    } else {
      setShowMoreCount(showMoreCount + 4);
    }
  };

  const renderedMovies = movies.slice(0, showMoreCount !== -1 ? showMoreCount + 4 : undefined);

  return (
    <div className="movies">
      <div className="movies-container">
        {renderedMovies.map((movie) => (
          <Movie
            key={movie.title}
            titleMovie={movie.title}
            from={movie.from}
            to={movie.to}
          />
        ))}
      </div>
      {showMoreCount !== -1 && movies.length > showMoreCount + 4 && (
        <div className="movies-bottom">
          <ShowMore
            content="show more"
            handleClick={handleCountShowFilms}
            children={undefined}
          />
        </div>
      )}
    </div>
  );
};