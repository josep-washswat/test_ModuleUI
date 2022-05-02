import { useCallback } from 'react';
import {useRecoilState} from 'recoil'
import { actionToggleAtom as uiN01ActionToggleAtom } from '../atoms/uiN01Atom';
import { actionToggleAtom as uiS02ActionToggleAtom } from '../atoms/uiN01Atom';
import { actionToggleAtom as uiS03ActionToggleAtom } from '../atoms/uiN01Atom';

const useAction = () => {
  const [, setUIN01Action] = useRecoilState(uiN01ActionToggleAtom);
  const [, setUIS02Action] = useRecoilState(uiS02ActionToggleAtom);
  const [, setUIS03Action] = useRecoilState(uiS03ActionToggleAtom);

  const setAction = useCallback((target) => {
    switch (target) {
      case 'uiN01':
        setUIN01Action(() => true);
      case 'uiS02':
        setUIS02Action(() => true);
      case 'uiS03':
        setUIS03Action(() => true);
      default:
        break;
    }
  }, []);

  return { setAction };
};

export default useAction;
