'use client';
import {atom} from 'recoil';

// INTERFACE FOR OUR AUTH MODAL!
export interface SidebarInterface {
    open: boolean
}


// DEFAULT STATE
const defaultState:SidebarInterface = {
    open: false,
}


// CREATING STORE ATOM WITH RECOIL
export const SidebarAtom = atom<SidebarInterface>({
    key: 'sidebarState123456',
    default: defaultState
}) 

