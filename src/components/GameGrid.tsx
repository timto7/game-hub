import { Text } from '@chakra-ui/react';

import useGames from '../hooks/useGames';

const GameGrid = () => {
  const { error, games } = useGames();

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
