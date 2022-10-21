import React from 'react';
import { useNavigate } from 'react-router-dom';

import useViewModel from './useViewModel';

import { parsePokemonToPartial } from 'ui-utils';
import { Button, PokemonCard } from 'ui-components';

const Home = () => {
  const navigate = useNavigate();
  const { pokemon, handleNextPokemon, handlePreviousPokemon } = useViewModel();

  return (
    <div>
      <div>Hello PokeFederations (web-app)</div>
      <Button onClick={handlePreviousPokemon}>-</Button>
      {pokemon?.id || 0}
      <Button onClick={handleNextPokemon}>+</Button>

      <br />

      {pokemon && (
        <PokemonCard
          pokemon={parsePokemonToPartial(pokemon)}
          onNameClick={(id: number) => navigate(`/pokemon/${id}`)}
          onTypeClick={(type: string) => console.log({ type })}
        />
      )}
    </div>
  );
};

export default Home;
