import React from 'react';

import useViewModel from './useViewModel';

import { parsePokemonToPartial } from 'ui-utils';
import { PokemonCard } from 'ui-components';

const Pokemon = () => {
  const { pokemon } = useViewModel();

  return (
    <div>
      {pokemon && (
        <PokemonCard
          pokemon={parsePokemonToPartial(pokemon)}
          onNameClick={(id: number) => console.log({ id })}
          onTypeClick={(type: string) => console.log({ type })}
        />
      )}
    </div>
  );
};

export default Pokemon;
