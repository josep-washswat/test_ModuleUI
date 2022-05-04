import { useCallback } from 'react';
import { atom, useRecoilState } from 'recoil';

const actionAtom = atom({ key: 'actionDataAtom', default: { target: '', props: {} } });
const useAction = () => {
  const [action, setAction] = useRecoilState(actionAtom);

  const callAction = useCallback((target, props) => {
    setAction({ target, props });
  }, []);

  return { action, callAction };
};

export default useAction;
