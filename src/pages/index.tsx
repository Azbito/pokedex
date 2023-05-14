import Head from 'next/head'

// libraries
import axios from 'axios'

// hooks
import { useContext, useEffect, useState } from 'react'

// contexts
import { PokeContext } from '@/contexts/pokeDataContext'

// typings
import { PokeProps } from '@/typings/pokeProps'
import { PokeCard } from '@/components/PokeCard'
import { Input } from '@/components/Input'

// styles
import * as S from '../components/Container/styles'
import { SearchPokemon } from '@/services/SearchPoke'
import { Button } from '@/components/Button'

interface HomeProps {
  pokedex: PokeProps
}

export default function Home({ pokedex }: HomeProps) {
  const { pokeInfo, setPokeInfo } = useContext(PokeContext)
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    setPokeInfo(pokedex)
  }, [])

  const handleSearchPokemon = async () => {
    await SearchPokemon({ search: search, setInfos: setPokeInfo })
  }

  return (
    <S.Container>
      <Input placeholder="Search a Pokémon" value={search} onChange={(e) => setSearch(e.target.value)} />
      <Button onClick={handleSearchPokemon} title='Search a Pokémon' />
      {pokeInfo &&
        <PokeCard name={pokeInfo?.name} img={pokeInfo?.sprites?.front_default} />
      }
    </S.Container>
  )
}

export async function getServerSideProps() {
  const { data: pokedex } = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  return {
    props: {
      pokedex
    }
  }
}
