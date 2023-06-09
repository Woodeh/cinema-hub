import { FC, useState } from "react";
import { Movie } from "../../../components/Movie/Movie";
import { trendMoviesDb } from "../../../utils/constants/trendsMoviesDb";
import "./TrendMovieList.scss";

interface ITrendMovies {}

export const TrendMovies: FC<ITrendMovies> = () => {
  const initialVisibleCount: number = 8;
  const [visibleCount, setVisibleCount] = useState<number>(initialVisibleCount);

  const handleShowMore = (): void => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const renderedMoviesIds: string[] = trendMoviesDb.slice(0, visibleCount);

  return (
    <div className="movies">
      <div className="movies-container">
        {renderedMoviesIds.map((movieId: string) => (
          <Movie key={movieId} imdbID={movieId} />
        ))}
      </div>
      {visibleCount < trendMoviesDb.length && (
        <div className="movies-bottom">
          <button className="show-more-button" onClick={handleShowMore}>
            show more
          </button>
        </div>
      )}
    </div>
  );
};
