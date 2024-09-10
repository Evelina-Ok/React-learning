// We will export it to main.jsx

// firstly import the hook
import { useContext } from "react";

export const ThemedContext = createContext()

export const ThemedContextProvider = (props) => {

    // state for the dark mode
    const [isDarkMode, setIsDarkMode] = useState()

    // function for the dark mode
    const handleChangeDarkMode = () => {
        if (isDarkMode === true){
            setIsDarkMode(false)
        }
        else {
            setIsDarkMode(true)
        }

    }
    return (
        <ThemedContext.Provider value={{isDarkMode, handleChangeDarkMode}}>
            {props.children}
        </ThemedContext.Provider>
    )

}