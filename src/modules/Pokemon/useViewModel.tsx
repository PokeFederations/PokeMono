import { useParams } from 'react-router-dom';

import { useGetPokemonById } from 'ui-model';

const useViewModel = () => {
  const { pokemonId } = useParams();
  const { data: pokemon } = useGetPokemonById({ params: { id: pokemonId } });

  return {
    pokemon,
  };
};

export default useViewModel;
