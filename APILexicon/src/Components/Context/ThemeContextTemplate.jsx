// firstly import the hook
import { useContext } from "react";

export const ThemedContext = createContext()

export const ThemedContextProvider = (props) => {

    return (
        <ThemedContext.Provider>
            {props.children}
        </ThemedContext.Provider>
    )

}