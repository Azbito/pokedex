import { styled } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #7303fc;
  backdrop-filter: blur(0.5rem);
  width: 100%;
  border-radius: 1rem;
  padding: 1rem 0 1rem 0;
  height: 100%;
  word-break: break-all;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #751de0;
  }

  &:active {
    background-color: #5d00cf;
  }
`

export const CardTitle = styled.b`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.2rem;
`
export const CardSubtitle = styled.h1`
  font-weight: 400;
`

export const CardDescription = styled.p`
  font-weight: 300;
  font-style: italic;
`

export const PokeSearchedContainer = styled.div`
  width: 20%;
`
