import { ButtonHTMLAttributes } from 'react';
import * as S from '../Button/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function BackButton({ ...props }: ButtonProps) {
  return (
    <S.Button {...props} borderRadius='2rem' mainBackground='#bb1c1c' hoverBackground='#f32f2f' activeBackground='#c42222'>
      <ArrowBackIosNewIcon />
    </S.Button>
  )
}