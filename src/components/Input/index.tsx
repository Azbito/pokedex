import { InputHTMLAttributes } from 'react'
import * as S from './styles'
import SearchIcon from '@mui/icons-material/Search';

type InputProps = InputHTMLAttributes<HTMLInputElement>

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