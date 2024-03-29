'use client';
import {atom} from 'recoil';

// INTERFACE FOR OUR MODAL!
export interface ModalInterface {
    isOpen: boolean,
    type: string,
}


// DEFAULT STATE
const defaultState:ModalInterface = {
    isOpen: false,
    type:''
}


// CREATING STORE ATOM WITH RECOIL
export const ModalAtom = atom<ModalInterface>({
    key: 'sidebarState123456',
    default: defaultState
}) 

