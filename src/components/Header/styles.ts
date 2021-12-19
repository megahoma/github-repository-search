import styled from 'styled-components'

export const Container = styled.header`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 125px 0 30px 0;

  @media (min-width: 1024px) {
    width: 50em;
  }
`

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.textHeader};
  letter-spacing: 2px;
  font-size: 26px;
`
