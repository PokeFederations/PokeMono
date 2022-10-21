import { useQuery } from 'react-query';
import axiosService from '../../services/axiosService';

type TGetPokemonManyProps = {
  params: {
    limit: number;
    page?: number;
  };
  options?: object;
};

export const useGetPokemonMany = ({ params, options }: TGetPokemonManyProps) => {
  const { limit = 1, page = 1 } = params;
  async function fetch() {
    const { data } = await axiosService.get(`v2/pokemon`, {
      params: {
        limit,
        offset: limit * (page - 1),
      },
    });
    return data;
  }

  return useQuery(['v2/pokemon', params], () => fetch(), options);
};

export default useGetPokemonMany;
