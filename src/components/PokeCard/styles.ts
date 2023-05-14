import { styled } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(0.5rem);
  width: 15%;
  padding: 3rem 0 3rem 0;
  border-radius: 1rem;
  height: 100%;
  word-break: break-all;
  text-align: center;
`

export const CardTitle = styled.b`
  font-size: 1.5rem;
  color: black;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.2rem;
`
