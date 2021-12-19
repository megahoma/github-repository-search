import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  margin: 30px auto 50px auto;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 0.938em;
  background: ${(props) => props.theme.colors.backgroundColorContent};

  @media (min-width: 1024px) {
    width: 50em;
  }
`

export const ContainerSelect = styled.div`
  width: 100%;
  padding-left: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.textHeader};
`
export const Label = styled.label``

export const Select = styled.select`
  width: 60%;
  color: ${(props) => props.theme.colors.textHeader};

  padding: 0.9em 1.5em;
  border-radius: 0.625em;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  background-image: url('./images/icon-expand.svg');
  background-repeat: no-repeat;
  background-position: right 5px center;
  background-size: 24px;
  appearance: none;
  cursor: pointer;

  @media (min-width: 700px) {
    width: 40%;
  }
`
//#d0d7de
export const Option = styled.option``
