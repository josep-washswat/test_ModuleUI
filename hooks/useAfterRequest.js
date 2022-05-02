import useAfterQuery from '../queries/useAfterQuery';

const useAfterRequest = () => {
  const { refetch, data, isFetching } = useAfterQuery();

  return { request: refetch, data, isFetching };
};

export default useAfterRequest;
