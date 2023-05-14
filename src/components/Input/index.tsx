import { InputHTMLAttributes } from 'react'
import * as S from './styles'
type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input(props: InputProps) {
  return <S.Input {...props} />
}