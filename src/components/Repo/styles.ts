import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  margin: 0 auto 50px auto;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  border-radius: 0.938em;
  background: ${(props) => props.theme.colors.backgroundColorContent};
  color: ${(props) => props.theme.colors.textHeader};

  @media (min-width: 1024px) {
    width: 50em;
  }
`
export const Profile = styled.div`
  padding: 1em 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  text-align: center;
  @media (min-width: 560px) {
    text-align: left;
  }
`
export const ProfileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  border-bottom: 1px solid #6a737d;
  @media (min-width: 560px) {
    flex-direction: row;
    justify-content: flex-start;
    border-bottom: 0px solid #6a737d;
  }
`
export const Avatar = styled.img`
  max-width: 25%;

  border-radius: 0.625em;
  box-shadow: 0 0 0 1px #1b1f2426;

  @media (min-width: 560px) {
    margin-right: 24px;
  }
`

export const Name = styled.h1``
export const Author = styled.a`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 6px;
`
export const DateCreated = styled.p`
  margin-bottom: 6px;
`
export const Description = styled.p`
  margin-top: 14px;
`

export const TopicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  margin: 1em 0;
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

export const Statistics = styled.div`
  padding: 1.5em 1em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  align-content: center;

  border-radius: 0.938em;
  background-color: ${(props) => props.theme.colors.backgroundColor};
`
export const StatItem = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export const StarIcon = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 auto;

  background-image: url(${process.env.PUBLIC_URL}/images/icon-star-blue.svg);
  background-repeat: no-repeat;
  background-position: center;
`
export const ForksIcon = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 auto;

  background-image: url(${process.env.PUBLIC_URL}/images/icon-branch.svg);
  background-repeat: no-repeat;
  background-position: center;
`
export const LicenseIcon = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 auto;

  background-image: url(${process.env.PUBLIC_URL}/images/icon-balance.svg);
  background-repeat: no-repeat;
  background-position: center;
`
