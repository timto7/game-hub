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
}

const useGames = (gameQuery: GameQuery) => {
  const { genre, platform, sortOrder: ordering } = gameQuery;

  return useData<Game>(
    '/games',
    {
      params: {
        genres: genre?.id,
        platforms: platform?.id,
        ordering,
      },
    },
    [gameQuery]
  );
};

export default useGames;
