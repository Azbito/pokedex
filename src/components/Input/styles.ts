import { styled } from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1rem);

  &::placeholder {
    color: black;
  }
`

export const IconContainer = styled.div`
  position: absolute;
  top: 0.2rem;
  right: 0.5rem;
  z-index: 1;
`
