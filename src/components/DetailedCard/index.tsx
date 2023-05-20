import { PokeProps } from "@/typings/pokeProps";
import { DetailedCardContainer, DetailedCardDescription, DetailedCardSkillDiv, DetailedCardSkillTitle, DetailedCardStrong, DetailedCardSubtitle, DetailedCardTitle, DetailedInfosCardContainer, DetailedMainInfosCardContainer, DetailedStatusCardContainer, ImageFrame } from "./styles";

export function DetailedCard({ name, types, height, weight, abilities, sprites }: PokeProps) {

  return (
    <DetailedCardContainer>
      <DetailedMainInfosCardContainer>
        <DetailedCardTitle>{name}</DetailedCardTitle>
        {types.map((item) => (
          <DetailedCardDescription>{item.type.name}</DetailedCardDescription>
        ))}
        <ImageFrame src={sprites?.front_default} alt={sprites?.front_default} />
      </DetailedMainInfosCardContainer>
      <DetailedInfosCardContainer>
        <DetailedStatusCardContainer>
          <DetailedCardStrong>Height:</DetailedCardStrong>
          <DetailedCardSubtitle>{height}</DetailedCardSubtitle>
        </DetailedStatusCardContainer>
        <DetailedStatusCardContainer>
          <DetailedCardStrong>Weight:</DetailedCardStrong>
          <DetailedCardSubtitle>{weight}</DetailedCardSubtitle>
        </DetailedStatusCardContainer>
        <DetailedInfosCardContainer>
          <DetailedCardStrong>Abilities</DetailedCardStrong>
          {abilities?.map((ability) => (
            <DetailedCardSkillDiv>
              <DetailedCardSkillTitle>{ability.ability.name}</DetailedCardSkillTitle>
            </DetailedCardSkillDiv>
          ))}
        </DetailedInfosCardContainer>
      </DetailedInfosCardContainer>
    </DetailedCardContainer>
  )
}