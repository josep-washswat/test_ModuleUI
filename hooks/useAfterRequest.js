import useAfterQuery from '../queries/useAfterQuery';

const useAfterRequest = () => {
  const { refetch, data, isIdle } = useAfterQuery();

  return { request: refetch, data, isIdle };
};

export default useAfterRequest;
