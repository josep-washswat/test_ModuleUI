import { useQuery } from 'react-query';

const useAfterQuery = () =>
  useQuery(
    'after',
    async () => {
      await new Promise((res) => setTimeout(res, 1000));
      return 'after data';
    },
    { enabled: false },
  );

export default useAfterQuery;
