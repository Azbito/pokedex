import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonProps = {
  title: string
} & ButtonHTMLAttributes<HTMLButtonElement> & S.ButtonStylesProps

export function Button({ title, ...props }: ButtonProps) {
  return <S.Button {...props}>{title}</S.Button>
}