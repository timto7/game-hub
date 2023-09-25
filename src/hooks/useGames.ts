import { GameQuery } from '../App';
import useData from './useData';
import { Genre } from './useGenres';

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

const useGames = ({ genre, platform }: GameQuery) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: genre?.id,
        platforms: platform?.id,
      },
    },
    [genre, platform]
  );

export default useGames;
