import React from 'react';
import { useNavigate } from 'react-router-dom';

import { parsePokemonToPartial } from 'ui-utils';
import useViewModel from './useViewModel';

import { PokemonCard, Button, Grid } from 'ui-components';

const AllPokemons = () => {
  const navigate = useNavigate();
  const { pokemonList, handleLoadMore, isLoading } = useViewModel();

  return (
    <div style={{ flexGrow: 1 }}>
      <Grid container spacing={1.2}>
        {pokemonList.map((pokemon: any, index: number) => (
          <Grid key={index} item xs={1.2}>
            <PokemonCard
              pokemon={parsePokemonToPartial(pokemon)}
              onNameClick={(id: number) => navigate(`/pokemon/${id}`)}
              onTypeClick={(type: string) => console.log({ type })}
            />
          </Grid>
        ))}
      </Grid>
      <div>
        <Button onClick={handleLoadMore} disabled={isLoading}>
          Load more
        </Button>
      </div>
    </div>
  );
};

export default AllPokemons;
