import React, { useRef } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

interface IDocsContext {
	challenges: React.MutableRefObject<any>;
	solution: React.MutableRefObject<any>;
	building: React.MutableRefObject<any>;
	installationk8s: React.MutableRefObject<any>;
}

export const DocsContext = createContext({} as IDocsContext)

const DocsContextProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const challenges = useRef(null)
    const solution = useRef(null)
    const building = useRef(null)
    const installationk8s = useRef(null)
    return (
        <DocsContext.Provider value={{challenges, solution, building, installationk8s}}>
            {children}
        </DocsContext.Provider>
    )
}

function useDocsContext() {
    const context = useContext(DocsContext)
    return context;
}

export {useDocsContext, DocsContextProvider}