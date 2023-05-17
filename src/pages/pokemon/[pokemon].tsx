import { Container } from "@/components/Container/styles"
import { DetailedCard } from "@/components/DetailedCard"
import { PokeCard } from "@/components/PokeCard"
import { CardTitle } from "@/components/PokeCard/styles"
import { PokeProps } from "@/typings/pokeProps"
import axios from "axios"
import { useRouter } from "next/router"

interface PokePageProps {
  data: PokeProps
}

export default function PokemonPage({ data }: PokePageProps) {

  console.log(data)

  return (
    <Container>
      <DetailedCard title={data.name} img={data.sprites.front_default} description={data.types[0].type.name} height={data.height} weight={data.weight} />
    </Container>)
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