import { PokeProps } from '@/typings/pokeProps'
import axios from 'axios'
import { Dispatch, SetStateAction } from 'react'

type SearchPokemon = {
  search: string
  setInfos: Dispatch<SetStateAction<PokeProps | null>>
}

export async function searchPokemon({ search, setInfos }: SearchPokemon) {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
  )
  setInfos(data)
  return data
}
