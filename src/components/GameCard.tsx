import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';

import CriticScore from './CriticScore';
import { Game } from '../hooks/useGames';
import getCroppedImageUrl from '../services/image-url';
import PlatformIconList from './PlatformIconList';
import Emoji from './Emoji';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody paddingTop={0}>
        <HStack justifyContent="space-between" marginBottom={1} marginTop={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
