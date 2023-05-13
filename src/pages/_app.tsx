import { PokeContextProvider } from '@/contexts/pokeDataContext'
import * as S from '@/styles/global.styles'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PokeContextProvider>
      <Component {...pageProps} />
      <S.GlobalStyle />
    </PokeContextProvider>
  )
}
