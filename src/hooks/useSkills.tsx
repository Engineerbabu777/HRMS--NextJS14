'use client';
import { updateCandidateSkills } from '@/actions/candidate/update-candidate-skills';
import { ModalAtom } from '@/recoil/modalAtom';
import React,{useState} from 'react'
import toast from 'react-hot-toast';
import { useRecoilState } from 'recoil';


type Skills = {
  skillName: string,
  points: number
}

export default function useSkills () {
  const [error, setError] = useState<string>()
  const [skills, setSkills] = useState<[]|Skills[]>([]);
  const [modalState, setModalState] = useRecoilState(ModalAtom)


  // FUNCTION THAT WILL ADD MORE SKILLS!
  const addSkill = () => {
    setSkills([...skills, { skillName: '', points: 0 }])
  }

  // FUNCTION THAT WILL REMOVE THE SPECIFIC SKILLS!
  const removeSkill = (index: number) => {
    setSkills([...skills.filter((v: Skills, i: number) => i !== index)])
  }

  // FUNCTION THAT WILL HANDLE ON SUBMIT DATA!
  const onSubmit = async (Id:string) => {
    // IF ANY OF THE SKILLS NAME IS EMPTY THEN DONT SUBMIT THE FORM!
    const emptySkill = skills.find((s: Skills) => s.skillName === '')
    if (emptySkill) {
      setError('Please fill al values!')
      return;
    }
    // SUBMIT DATA!
    const response:any = await updateCandidateSkills(skills,Id);
    // IF RESPONSE IS OK!
    if (response.status === 200) {
      setModalState({type:"",isOpen:false});
      toast.success("Updated")
    }
  }

  // FUNCTION THAT WILL HANDLE ON CHANGE EVENT!
  const changeValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    // EXTRACTING VALUES FROM TARGETED EVENT!
    const { name, value } = e.target

    // MAKING DUPLICATE ARRAY OF SKILLS TO MANIPULATE!
    const updatedSkills = [...skills]


    // UPDATING THE VALUE OF THE SPECIFIC SKILL!
    updatedSkills[index] = {
      ...updatedSkills[index],
      [name]: value
    }

    // CLEARING THE ERROR!
    setError('')

    // UPDATING SKILLS ARRAY!
    setSkills(updatedSkills)
  }


  // RETURNING SOME STATES AND FUNCTIONS FROM THE HOOK!
  return {
    changeValue,
    addSkill,
    removeSkill,
    error,
    onSubmit,
    skills,
  }
}
