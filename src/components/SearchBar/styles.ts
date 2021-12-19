import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 0.938em;
  background: ${(props) => props.theme.colors.backgroundColorSearch};

  @media (min-width: 1024px) {
    width: 50em;
  }
`

export const SearchIcon = styled.div`
  width: 40px;
  height: 40px;

  background-image: url('./images/icon-search.svg');
  background-repeat: no-repeat;
  background-position: center;
`

export const Input = styled.input`
  flex: 1 1 auto;
  margin-left: 0.5em;
  margin-right: 0.5em;
  background-color: ${(props) => props.theme.colors.backgroundColorSearch};

  color: ${(props) => props.theme.colors.text};

  &:focus {
    caret-color: ${(props) => props.theme.colors.primary};
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.text};
  }
`

export const ErrorMessage = styled.p`
  margin-right: 1em;
  color: red;
`

export const Button = styled.button`
  padding: 1em 1.5em;
  border-radius: 0.625em;
  background-color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
  color: ${(props) => props.theme.colors.secondary};
`
