
// libraries
import axios from 'axios'

// hooks
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// contexts
import { PokeContext } from '@/contexts/pokesDataContext'

// typings
import { PokeProps } from '@/typings/pokeProps'
import { PokeCard } from '@/components/PokeCard'
import { Input } from '@/components/Input'

// styles
import { Container, ContainerMap } from '../components/Container/styles'

// services
import { searchPokemon } from '@/services/searchPoke'

//components
import { Button } from '@/components/Button'
import { PokeInfoContext } from '@/contexts/pokeDataContext'
import { PokeSearchedContainer } from '@/components/PokeCard/styles'

interface HomeProps {
  pokemons: PokeProps[]
}

export default function Home({ pokemons }: HomeProps) {
  const { pokesInfo, setPokesInfo } = useContext(PokeContext)
  const { pokeInfo, setPokeInfo } = useContext(PokeInfoContext)
  const [isEmpty, setIsEmpty] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    if (pokesInfo.length == 0) {
      setPokesInfo(pokemons)
      return
    }
  }, [])

  const handleSearchPokemon = async () => {
    if (!isEmpty) {
      await searchPokemon({ search: search, setInfos: setPokeInfo })
      return
    }

    alert("Please, type a name")
  }

  useEffect(() => {
    if (search === '') {
      setIsEmpty(true)
      return
    }
    setIsEmpty(false)
  }, [search])

  return (
    <Container>
      <Input placeholder="Search a Pokémon" value={search} onChange={(e) => setSearch(e.target.value)} />
      <Button activeBackground='#65913a' mainBackground='#79b33f' hoverBackground='#8bb363' onClick={handleSearchPokemon} title='Search' />
      {pokeInfo &&
        <PokeSearchedContainer>
          <PokeCard id={pokeInfo.id} name={pokeInfo?.name} img={pokeInfo?.sprites?.front_default} type={pokeInfo.types[0].type.name} onClick={() => router.push(`/pokemon/${pokeInfo?.name}`)} />
        </PokeSearchedContainer>
      }
      <ContainerMap>
        {pokesInfo.length && <>
          {pokesInfo.map((item) => (
            <PokeCard id={item.id} name={item?.name} img={item?.sprites?.front_default} type={item.types[0].type.name} onClick={() => router.push(`/pokemon/${item.name}`)}
            />
          ))
          }
        </>}
      </ContainerMap>
    </Container>
  )
}



export async function getServerSideProps() {
  try {
    const { data: pokedex } = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=50&offset=60')

    let pokemons = []

    for (let i = 0; i < pokedex.results.length; i++) {
      const { data: pokemon } = await axios.get(pokedex.results[i].url)
      pokemons.push(pokemon)
    }

    return {
      props: {
        pokemons
      }
    }
  } catch (error: any) {
    alert(error)
  }
}
