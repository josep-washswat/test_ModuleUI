import { useEffect } from 'react';
import { UIDataAtom } from '../atoms/UIDataAtom';
import { useAtom } from 'jotai';
import useUIDataQuery from '../queries/useUIDataQuery';

const useUIData = () => {
  const [data, setData] = useAtom(UIDataAtom);
  const { isFetched } = useUIDataQuery(setData);

  return { isFetched, data };
};

export default useUIData;
