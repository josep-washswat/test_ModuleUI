import { atom } from 'recoil';

export const imageUrlAtom = atom({
    key:'imageUrlAtomRecoil',
    default:{ uri: '' }
});
export const actionToggleAtom = atom({
    key:'actionToggleAtomS03',
    default:false
});
