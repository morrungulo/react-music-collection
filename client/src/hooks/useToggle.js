import { useState } from "react"

const useToggle = (value) => {
  const [toggleValue, setToggleValue] = useState(!!value)

  const toggleAction = () => setToggleValue(prev => !prev)

  return { toggleAction, toggleValue }
}

export default useToggle
