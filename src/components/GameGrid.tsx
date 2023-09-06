import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>('/games')
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <ul>
        {games.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
