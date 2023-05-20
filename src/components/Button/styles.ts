import { styled } from 'styled-components'

export interface ButtonStylesProps {
  mainBackground?: string
  hoverBackground?: string
  activeBackground?: string
  borderRadius?: string
}

export const Button = styled.button<ButtonStylesProps>`
  background-color: ${props => props.mainBackground ?? '#a600ff'};
  transition: 0.2s;
  border: none;
  outline: none;
  padding: 0.7rem;
  border-radius: ${props => props.borderRadius ?? '1rem'};
  cursor: pointer;
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;

  &:hover {
    background-color: ${props => props.hoverBackground ?? '#c14dff'};
  }
  &:active {
    background-color: ${props => props.activeBackground ?? '#7c17b3'};
  }
`
