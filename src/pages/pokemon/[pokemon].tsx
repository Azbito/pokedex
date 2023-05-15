import { PokeCard } from "@/components/PokeCard"
import { useRouter } from "next/router"

export default function PokemonPage() {
  const router = useRouter()
  const { pokemon } = router.query

  return (<>
    {pokemon}
  </>)
}