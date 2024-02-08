


import {atom} from 'recoil';

// WILL MOVE LATER!
type Skills = {
    skillName:string 
    points:number
    candidates:any
}

export interface SharedAtom  {
    selectedCandidateID: string | null
    selectedSkills:Skills[] | []
    candidates:[]|any
}


const defaultSharedState:SharedAtom = {
    selectedCandidateID: null,
    selectedSkills:[],
    candidates:[]
}


export const sharedAtom = atom<SharedAtom>({
    default:defaultSharedState,
    key:'sharedAtomKey45678'
});



