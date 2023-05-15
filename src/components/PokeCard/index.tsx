import * as S from "./styles";

type PokeCardProps = {
  name: string | string[] | undefined
  img: string,
  id?: number | null,
  type?: any,
  onClick?: () => void
}

export function PokeCard({ name, img, id, type, onClick }: PokeCardProps) {
  return (
    <S.CardContainer key={id} onClick={onClick}>
      <S.CardTitle>{name}</S.CardTitle>
      <img src={img} alt={img} />
      <S.CardDescription>{type}</S.CardDescription>
    </S.CardContainer>
  )
}