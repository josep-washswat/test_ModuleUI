import { useEffect } from 'react';
import { UIDataAtom } from '../atoms/UIDataAtom';
import { useAtom } from 'jotai';
import useUIDataQuery from '../queries/useUIDataQuery';

const useUIData = () => {
  const { isLoading, data } = useUIDataQuery();
  const [, setUIData] = useAtom(UIDataAtom);
  useEffect(() => {
    if (data) {
      setUIData(data);
    }
  }, [data]);
  return { isLoading, data };
};

export default useUIData;
