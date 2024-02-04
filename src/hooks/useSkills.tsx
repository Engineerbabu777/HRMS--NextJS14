import React from 'react'


type Skills = {
  skillName: string,
  points: number
}

export default function useSkills () {
  const [error, setError] = React.useState()
  const [skills, setSkills] = React.useState<[]|[Skills]>([]);


  const addSkill = () => {
    setSkills([...skills, { skillName: '', points: 0 }])
  }

  const removeSkill = (index: number) => {
    setSkills([...skills.filter((v: Skills, i: number) => i !== index)])
  }

  const onSubmit = async () => {
    // IF ANY OF THE SKILLS NAME IS EMPTY THEN DONT SUBMIT THE FORM!
    const emptySkill = skills.find((s: Skills) => s.skillName === '')
    if (emptySkill) {
      setError('Please fill al values!')
    }
    // SUBMIT DATA!
  }

  const changeValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target

    // Create a copy of the skills array
    const updatedSkills = [...skills]

    // Update the specific element at the given index
    updatedSkills[index] = {
      ...updatedSkills[index],
      [name]: value
    }

    // ON EVERY CHANGE UPDATE THE ERROR STATE TO BE NULL!
    setError('')

    // Set the updated skills array
    setSkills(updatedSkills)
  }

  return {
    changeValue,
    addSkill,
    removeSkill,
    error,
    onSubmit,
    skills
  }
}
