import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  margin: 30px auto 50px auto;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 0.938em;
  background: ${(props) => props.theme.colors.backgroundColorContent};
  color: ${(props) => props.theme.colors.textHeader};

  @media (min-width: 1024px) {
    width: 50em;
  }
`
export const Title = styled.h3`
  width: 100%;
  padding: 0.5em 0.5em 12px 0.5em;
`

export const ItemContainer = styled.div`
  width: 100%;
  padding: 24px 0;
  display: flex;
  border-top: 1px solid #6a737d;
`
export const BookIcon = styled.div`
  width: 24px;
  height: 24px;
  min-width: 24px;
  margin-right: 8px;

  background-image: url(./images/icon-book.svg);
  background-repeat: no-repeat;
  background-position: center;
`
export const Content = styled.div``
export const FullName = styled.h3`
  color: ${(props) => props.theme.colors.text};
  font-weight: 300;
`
export const Link = styled.a`
  color: ${(props) => props.theme.colors.primary};
`
export const Description = styled.p``

export const TopicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  margin: 5px 0;
`
export const TopicsItem = styled.div`
  margin: 2px 5px 5px 0;
  padding: 3px 7px;
  border-radius: 2em;
  background-color: ${(props) => props.theme.colors.backgroundColorTopics};

  color: ${(props) => props.theme.colors.textTopics};
  font-weight: 500;

  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.theme.colors.backgroundColorHoverTopics};
    color: ${(props) => props.theme.colors.textHoverTopics};
  }
`

export const OtherContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  margin: 5px 0;
`
export const StarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 25px;
`
export const StarIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 5px;

  background-image: url(./images/icon-star.svg);
  background-repeat: no-repeat;
  background-position: center;
`

export const LanguageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 25px;
`
export const LanguageIcon = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #f1e05a;
  margin-right: 5px;
`
