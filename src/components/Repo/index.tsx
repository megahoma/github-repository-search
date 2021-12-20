import React from 'react'
import Moment from 'react-moment'
import { useSelector } from 'react-redux'
import { RootState } from '../../types'

import {
  Container,
  Profile,
  Avatar,
  ProfileWrapper,
  Name,
  Author,
  DateCreated,
  Description,
  TopicsContainer,
  TopicsItem,
  Statistics,
  StatItem,
  StarIcon,
  ForksIcon,
  LicenseIcon,
} from './styles'

interface Props {
  name: string
}

const Repo: React.FC<Props> = ({ name }) => {
  const repo = useSelector((state: RootState) => state.repo)
  const isLoader = useSelector((state: RootState) => state.isLoader.status)

  return (
    <React.Fragment>
      {!isLoader ? (
        <Container>
          <Profile>
            <ProfileWrapper>
              <Avatar
                src={repo.owner.avatar_url}
                alt={repo.owner.login}
                loading="lazy"
              />

              <div>
                <Name>{name}</Name>
                <Author href={repo.owner.html_url} target={'_blank'}>
                  @{repo.owner.login}
                </Author>
                <DateCreated>
                  Created{' '}
                  <Moment format="DD MMM YYYY">{repo.created_at}</Moment>
                </DateCreated>
              </div>
            </ProfileWrapper>

            <Description>
              {repo.description === null
                ? "I'am a mysterious repository which hasn't filled its description."
                : repo.description}
            </Description>
          </Profile>

          <Statistics>
            <div>
              <StarIcon />
              <StatItem>
                <b>
                  {repo.stargazers_count > 9999
                    ? `${Math.round(repo.stargazers_count / 1000)}k`
                    : repo.stargazers_count}
                </b>
                &nbsp;stars
              </StatItem>
            </div>

            <div>
              <ForksIcon />
              <StatItem>
                <b>
                  {repo.forks_count > 9999
                    ? `${Math.round(repo.forks_count / 1000)}k`
                    : repo.forks_count}
                </b>{' '}
                &nbsp;forks
              </StatItem>
            </div>

            <div>
              <LicenseIcon />
              <StatItem>
                {repo.license === null ? 'No license' : repo.license?.name}
              </StatItem>
            </div>
          </Statistics>

          {repo.topics.length > 0 ? (
            <TopicsContainer>
              {repo.topics.map((item, i) => (
                <TopicsItem key={i}>{item}</TopicsItem>
              ))}
            </TopicsContainer>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </Container>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Repo
