import { useQuery } from 'react-query';
import UIService from '../services/uiService';
import { key } from './keys';

const useUIDataQuery = () => useQuery(key.all(), UIService.getUI);

export default useUIDataQuery;
