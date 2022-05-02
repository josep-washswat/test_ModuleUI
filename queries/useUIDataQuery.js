import { useQuery } from 'react-query';
import UIService from '../services/uiService';
import { key } from './keys';

const useUIDataQuery = (onSuccess) =>
  useQuery(key.all(), UIService.getUI, {
    onSuccess,
  });

export default useUIDataQuery;
