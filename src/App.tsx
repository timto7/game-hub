import { useState } from 'react';

import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';

import GameGrid from './components/GameGrid';
import { Genre } from './hooks/useGenres';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import { Platform } from './hooks/useGames';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) =>
            setGameQuery((prev) => ({ ...prev, searchText }))
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" marginTop={2} paddingX={5}>
          <GenreList
            onSelectGenre={(genre) =>
              setGameQuery((prev) => ({ ...prev, genre }))
            }
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box marginLeft={10}>
          <GameHeading gameQuery={gameQuery} />
          <Flex>
            <Box marginRight={5}>
              <PlatformSelector
                onSelectPlatform={(platform) =>
                  setGameQuery((prev) => ({ ...prev, platform }))
                }
                selectedPlatform={gameQuery.platform}
              />
            </Box>
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery((prev) => ({ ...prev, sortOrder }))
              }
              sortOrder={gameQuery.sortOrder}
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
