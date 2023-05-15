import { PokeProps } from '@/typings/pokeProps';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface PokeContextType {
  pokesInfo: PokeProps[],
  setPokesInfo: Dispatch<SetStateAction<PokeProps[]>>;
}

interface PokeContextProviderProps {
  children: ReactNode
}

export const PokeContext = createContext({} as PokeContextType)


export const PokeContextProvider = ({ children }: PokeContextProviderProps) => {

  const [pokesInfo, setPokesInfo] = useState<PokeProps[]>([]);

  return (
    <PokeContext.Provider value={{ pokesInfo, setPokesInfo }}>
      {children}
    </PokeContext.Provider>
  )
}