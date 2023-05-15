import { PokeProps } from '@/typings/pokeProps';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface PokeInfoContextType {
  pokeInfo: PokeProps | null,
  setPokeInfo: Dispatch<SetStateAction<PokeProps | null>>;
}

interface PokeInfoContextProviderProps {
  children: ReactNode
}

export const PokeInfoContext = createContext({} as PokeInfoContextType)


export const PokeInfoContextProvider = ({ children }: PokeInfoContextProviderProps) => {

  const [pokeInfo, setPokeInfo] = useState<PokeProps | null>(null);

  return (
    <PokeInfoContext.Provider value={{ pokeInfo, setPokeInfo }}>
      {children}
    </PokeInfoContext.Provider>
  )
}