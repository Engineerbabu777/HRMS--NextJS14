
import { useState } from 'react'


// WILL USE THIS BUT LATER INSTEAD OF RECOIL STATE!!
export function useSidebarModal () {


  const [open, setOpen] = useState <boolean>(false)

  const handleToggle = () => {
    setOpen(!open) 
  }

  return {
    open,
    setOpen,
    handleToggle
  }
}
