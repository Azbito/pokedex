import { styled } from 'styled-components'

export const DetailedCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #7303fc;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
  word-break: break-all;
`

export const DetailedCardTitle = styled.b`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: white;
  letter-spacing: 0.2rem;
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
