import { getFakeServerData } from '../fake-server';

class UIService {
  getUI = () => {
    return getFakeServerData();
  };
}

export default new UIService();
