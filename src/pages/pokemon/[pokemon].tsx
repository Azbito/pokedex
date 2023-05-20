//components
import { BackButton } from "@/components/BackButton"
import { BackButtonContainer, Container } from "@/components/Container/styles"
import { DetailedCard } from "@/components/DetailedCard"

//typings
import { PokeProps } from "@/typings/pokeProps"

//libs
import axios from "axios"

//hooks
import { useRouter } from "next/router"

interface PokePageProps {
  data: PokeProps
}

export default function PokemonPage({ data }: PokePageProps) {

  const router = useRouter()

  return (
    <Container>
      <BackButtonContainer>
        <BackButton onClick={() => router.back()} />
      </BackButtonContainer>
      <DetailedCard
        name={data.name}
        sprites={data?.sprites}
        height={data.height}
        weight={data.weight}
        abilities={data.abilities}
        types={data.types}
      />
    </Container>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          pokemon: 'pikachu'
        }
      },
      {
        params: {
          pokemon: 'charmander'
        }
      },
      {
        params: {
          pokemon: 'bulbassaur'
        }
      },
      {
        params: {
          pokemon: 'mewtwo'
        }
      },
    ],
    fallback: true
  }
}


export const getStaticProps = async (context: any) => {
  const { pokemon } = context.params

  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    return {
      props: {
        data,
        pokemon
      }
    }
  } catch (error) {
    alert(error)
    return {
      notFound: true
    }
  }
}