import { useMemo } from 'react';

import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = useMemo(() => {
    if (score > 75) return 'green';
    if (score > 60) return 'yellow';
    return '';
  }, []);

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
