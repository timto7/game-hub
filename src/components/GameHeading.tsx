import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { genre, platform } = gameQuery;

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as="h1" fontSize="5xl" marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
