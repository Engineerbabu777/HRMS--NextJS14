import { updateDetailsField } from '@/actions/job/update-details-field'
import { useState } from 'react'
import toast from 'react-hot-toast'

// WILL CHANGE THE TYPES LATER AS WELL!
export default function useUpdateJobDetail () {
  const [updating, setUpdating] = useState<boolean>(false)

  // FUNCTION THAT WILL USE SERVER ACTION FUNCTION AND UPDATE THE FIELD VALUE!
  const updateEditedField = async (
    value: string | number,
    name: string,
    ID: string
  ) => {
    setUpdating(true)

    // UPDATE THE DETAIL!
    const response: any = await updateDetailsField(name, value, ID)

    // IF THE RESPONSE WAS IN SUCCESS!
    if (response?.success) {
      toast.success(response.message)
      setUpdating(false)
    } else {
      setUpdating(false)
      toast.success(response.message)
    }
  }

  // RETURNING SOME VALUES TO USE THEM!
  return {
    updateEditedField,
    updating
  }
}


// WILL MAKE A SINGLE HOOK FOR DETAILS HANDLING!
