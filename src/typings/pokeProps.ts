export interface PokeProps {
  id: number | null
  name: string
  url: string
  weight: number | null
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
}
