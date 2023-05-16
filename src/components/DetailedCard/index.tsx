import { DetailedCardContainer, DetailedCardDescription, DetailedCardTitle, ImageFrame } from "./styles";

interface DetailedCardProps {
  title: string,
  description: string,
  img: string
}

export function DetailedCard({ title, description, img }: DetailedCardProps) {
  return (
    <DetailedCardContainer>
      <DetailedCardTitle>{title}</DetailedCardTitle>
      <DetailedCardDescription>{description}</DetailedCardDescription>
      <ImageFrame src={img} alt={img} />
    </DetailedCardContainer>
  )
}