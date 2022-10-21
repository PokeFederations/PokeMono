import { useState } from 'react';

import { useGetPokemonById } from 'ui-model';

const useViewModel = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const { data: pokemon } = useGetPokemonById({ params: { id: pokemonId } });

  const handleNextPokemon = () => {
    setPokemonId(pokemonId + 1);
  };

  const handlePreviousPokemon = () => {
    if (pokemonId > 1) setPokemonId(pokemonId - 1);
  };

  return {
    pokemon,
    handleNextPokemon,
    handlePreviousPokemon,
  };
};

export default useViewModel;
