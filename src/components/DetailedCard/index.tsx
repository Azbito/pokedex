import { DetailedCardContainer, DetailedCardDescription, DetailedCardStrong, DetailedCardSubtitle, DetailedCardTitle, DetailedInfosCardContainer, DetailedStatusCardContainer, ImageFrame } from "./styles";

interface DetailedCardProps {
  title: string,
  description: string,
  img: string,
  height: number | null | undefined,
  weight: number | null | undefined,
  ability: string
}

export function DetailedCard({ title, description, img, height, weight }: DetailedCardProps) {
  return (
    <DetailedCardContainer>
      <DetailedInfosCardContainer>
        <DetailedCardTitle>{title}</DetailedCardTitle>
        <DetailedCardDescription>{description}</DetailedCardDescription>
        <ImageFrame src={img} alt={img} />
      </DetailedInfosCardContainer>
      <DetailedInfosCardContainer>
        <DetailedStatusCardContainer>
          <DetailedCardStrong>Height:</DetailedCardStrong>
          <DetailedCardSubtitle>{height}</DetailedCardSubtitle>
        </DetailedStatusCardContainer>
        <DetailedStatusCardContainer>
          <DetailedCardStrong>Weight:</DetailedCardStrong>
          <DetailedCardSubtitle>{weight}</DetailedCardSubtitle>
        </DetailedStatusCardContainer>
      </DetailedInfosCardContainer>
    </DetailedCardContainer>
  )
}