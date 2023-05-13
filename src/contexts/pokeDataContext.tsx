import { PokeProps } from '@/typings/pokeProps';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface PokeContextType {
  pokeInfo: PokeProps,
  setPokeInfo: Dispatch<SetStateAction<PokeProps>>;
}

interface PokeContextProviderProps {
  children: ReactNode
}

export const PokeContext = createContext({} as PokeContextType)


export const PokeContextProvider = ({ children }: PokeContextProviderProps) => {

  const [pokeInfo, setPokeInfo] = useState<PokeProps>({
    name: '',
    id: null,
    sprites: {
      front_default: ''
    },
    url: '',
    weight: null,
    types: {
      type: {
        url: ''
      }
    }
  });

  return (
    <PokeContext.Provider value={{ pokeInfo, setPokeInfo }}>
      {children}
    </PokeContext.Provider>
  )
}