import { atom } from 'recoil';

export const imageUrlAtom = atom({
  key: 'imageUrlAtomRecoil',
  default: { uri: '' },
});
