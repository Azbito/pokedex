import { styled } from 'styled-components'

export interface ButtonStylesProps {
  mainBackground?: string
  hoverBackground?: string
  activeBackground?: string
}

export const Button = styled.button<ButtonStylesProps>`
  background-color: ${props => props.mainBackground ?? '#a600ff'};
  transition: 0.2s;
  border: none;
  outline: none;
  padding: 0.7rem;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.hoverBackground ?? '#c14dff'};
  }
  &:active {
    background-color: ${props => props.activeBackground ?? '#7c17b3'};
  }
`
