import { InputHTMLAttributes } from 'react'
import * as S from './styles'
type InputProps = InputHTMLAttributes<HTMLInputElement>
import SearchIcon from '@mui/icons-material/Search';

export function Input(props: InputProps) {
  return (
    <S.Container>
      <S.IconContainer>
        <SearchIcon />
      </S.IconContainer>
      <S.Input {...props} />
    </S.Container>
  )
}