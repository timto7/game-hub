import { SimpleGrid, Text } from '@chakra-ui/react';

import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import { GameQuery } from '../App';

const skeletons = [1, 2, 3, 4, 5, 6];

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { error, data: games, loading } = useGames(gameQuery);

  if (error) return <Text color="red">{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={10}
      spacing={6}
    >
      {loading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {games.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
