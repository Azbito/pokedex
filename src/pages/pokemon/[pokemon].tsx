import { Container } from "@/components/Container/styles"
import { DetailedCard } from "@/components/DetailedCard"
import { PokeProps } from "@/typings/pokeProps"
import axios from "axios"

interface PokePageProps {
  data: PokeProps
}

export default function PokemonPage({ data }: PokePageProps) {

  return (
    <Container>
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

export async function getServerSideProps(context: any) {
  const { pokemon } = context.params

  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

  return {
    props: {
      data
    }
  }
}
