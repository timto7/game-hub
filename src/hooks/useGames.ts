import { GameQuery } from '../App';
import useData from './useData';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  const { genre, platform, searchText, sortOrder: ordering } = gameQuery;

  return useData<Game>(
    '/games',
    {
      params: {
        genres: genre?.id,
        ordering,
        platforms: platform?.id,
        search: searchText,
      },
    },
    [gameQuery]
  );
};

export default useGames;
