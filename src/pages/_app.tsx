import { PokeInfoContextProvider } from '@/contexts/pokeDataContext'
import { PokeContextProvider } from '@/contexts/pokesDataContext'
import * as S from '@/styles/global.styles'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PokeContextProvider>
      <PokeInfoContextProvider>
        <Component {...pageProps} />
        <S.GlobalStyle />
      </PokeInfoContextProvider>
    </PokeContextProvider>
  )
}
