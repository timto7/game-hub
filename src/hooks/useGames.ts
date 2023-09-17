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
  metacritic: number;
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);

        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;

        setError(error.message);

        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { error, games, loading };
};

export default useGames;
