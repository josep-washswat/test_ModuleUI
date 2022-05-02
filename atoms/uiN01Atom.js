import { atom } from 'recoil';


export const buttonTextAtom = atom({
    key:'buttonTextAtomRecoil',
    default:'Back Button'
});
export const actionToggleAtom = atom({
    key:'actionToggleAtomRecoil',
    default:false
});
