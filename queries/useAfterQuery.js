import { useQuery } from 'react-query';

const useAfterQuery = () => useQuery('after', () => 'after data', { enabled: false });

export default useAfterQuery;
