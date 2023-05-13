import Head from 'next/head'

// libraries
import axios from 'axios'

// hooks
import { useContext, useEffect, useState } from 'react'

// contexts
import { PokeContext } from '@/contexts/pokeDataContext'
import Image from 'next/image'
import { PokeProps } from '@/typings/pokeProps'
import { PokeCard } from '@/components/PokeCard'

interface HomeProps {
  pokedex: PokeProps
}

export default function Home({ pokedex }: HomeProps) {
  const { pokeInfo, setPokeInfo } = useContext(PokeContext)

  useEffect(() => {
    setPokeInfo(pokedex)
  }, [pokedex])

  return (
    <>
      {pokeInfo &&
        <PokeCard name={pokeInfo?.name} img={pokeInfo?.sprites?.front_default} />
      }
    </>
  )
}

export async function getServerSideProps() {
  const { data: pokedex } = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  const { data: type } = await axios.get('https://pokeapi.co/api/v2/pokemon-species/132')

  return {
    props: {
      pokedex,
      type
    }
  }
}
