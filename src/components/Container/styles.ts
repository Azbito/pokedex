import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10rem;
  gap: 2rem;
  position: relative;
`

export const ContainerMap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin-top: 2rem;
`

export const BackButtonContainer = styled.div`
  position: absolute;
  bottom: -5rem;
  left: 2rem;
`
