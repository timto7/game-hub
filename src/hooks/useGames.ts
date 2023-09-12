import { useEffect, useState } from 'react';

import { CanceledError } from 'axios';

import apiClient from '../services/api-client';

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
}

export interface FetchGamesResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;

        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { error, games };
};

export default useGames;
