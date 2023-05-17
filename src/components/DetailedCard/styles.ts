import { styled } from 'styled-components'

export const DetailedCardContainer = styled.div`
  display: flex;
  background-color: #7303fc;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
  word-break: break-all;
  gap: 2rem;
  padding-right: 5rem;
`

export const DetailedInfosCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const DetailedStatusCardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const DetailedCardTitle = styled.b`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: white;
  letter-spacing: 0.2rem;
`

export const DetailedCardSubtitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 400;
  color: white;
`

export const DetailedCardStrong = styled.b`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin-right: 0.5rem;
`

export const DetailedCardDescription = styled.p`
  margin-top: -0.5rem;
  color: white;
  font-size: 1rem;
  font-style: italic;
`

export const ImageFrame = styled.img`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5rem;
`
