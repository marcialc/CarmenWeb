import { useRef } from "react"

export const useOutsideAlerter = () => {
    const ref = useRef(null)

    const handleClickOutside = () => {

    }


    document.addEventListener("click", handleClickOutside, true)

    return { ref }
}