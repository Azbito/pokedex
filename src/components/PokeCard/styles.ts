import { styled } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(0.5rem);
  width: 100%;
  padding: 1rem 0 3rem 0;
  border-radius: 1rem;
  height: 100%;
  word-break: break-all;
  text-align: center;
  transition: 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.6);
  }
`

export const CardTitle = styled.b`
  font-size: 1.5rem;
  color: black;
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
