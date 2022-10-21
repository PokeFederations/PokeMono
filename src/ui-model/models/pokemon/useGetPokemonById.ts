import { useQuery } from 'react-query';
import axiosService from '../../services/axiosService';

type TGetPokemonByIdProps = {
  params: { id: number | string };
  options?: object;
};

export const useGetPokemonById = ({ params, options }: TGetPokemonByIdProps) => {
  async function fetch(id: number | string) {
    const { data } = await axiosService.get(`v2/pokemon/${id}`);
    return data;
  }

  return useQuery(['v2/pokemon', params.id], () => fetch(params.id), options);
};

export default useGetPokemonById;
