import * as S from "./styles";

type PokeCardProps = {
  name: string
  img: string,
  // type: string
}

export function PokeCard({ name, img }: PokeCardProps) {
  return (
    <S.CardContainer>
      <S.CardTitle>{name}</S.CardTitle>
      <img src={img} alt={img} />
      {/* <h1>{type}</h1> */}
    </S.CardContainer>
  )
}