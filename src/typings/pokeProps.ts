export interface PokeProps {
  id?: number | null
  name: string
  url?: string
  weight?: number | null | undefined
  height: number | null | undefined

  sprites: {
    front_default: string
  }

  types: [
    {
      type: {
        name: string
      }
    }
  ]

  abilities: [
    {
      ability: {
        name: string
      }
    }
  ]
}
