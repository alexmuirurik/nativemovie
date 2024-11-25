import React, { createContext, ReactNode, useContext, useState } from "react";

export const fetchContext = createContext({fetching: false, setFetching: (boolean: boolean) => {}})

export const FetchContextProvider = ({children}: {children: ReactNode}) => {
    const [fetching, setFetching] = useState(false)
    return (
        <fetchContext.Provider value={{fetching, setFetching}}>
            {children}
        </fetchContext.Provider>
    )
}

export const useFetching = () => useContext(fetchContext)