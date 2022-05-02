import { useEffect } from 'react';
import { UIDataAtom } from '../atoms/UIDataAtom';
import {useRecoilState} from 'recoil'
import useUIDataQuery from '../queries/useUIDataQuery';

const useUIData = () => {
  const [data, setData] = useRecoilState(UIDataAtom);
  const { isFetched } = useUIDataQuery(setData);

  return { isFetched, data };
};

export default useUIData;
