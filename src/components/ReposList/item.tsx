import React from 'react'
import { Link } from 'react-router-dom'
import { IRepository } from '../../types'

import {
  ItemContainer,
  BookIcon,
  Content,
  FullName,
  Description,
  TopicsContainer,
  TopicsItem,
  OtherContainer,
  LanguageContainer,
  LanguageIcon,
  StarContainer,
  StarIcon,
} from './styles'

interface Props {
  data: IRepository
}

const Item: React.FC<Props> = ({ data }) => {
  return (
    <ItemContainer>
      <BookIcon />
      <Content>
        <FullName>
          <Link to={(location) => `${location.pathname}${data.full_name}`}>
            {data.full_name}
          </Link>
        </FullName>
        {data.description !== null ? (
          <Description>
            {data.description.substring(0, 100)}
            {data.description.length > 100 ? '...' : ''}
          </Description>
        ) : (
          <React.Fragment></React.Fragment>
        )}

        {data.topics.length > 0 ? (
          <TopicsContainer>
            {data.topics.map((item, i) => (
              <TopicsItem key={i}>{item}</TopicsItem>
            ))}
          </TopicsContainer>
        ) : (
          <React.Fragment></React.Fragment>
        )}

        <OtherContainer>
          {data.stargazers_count > 0 ? (
            <StarContainer>
              <StarIcon />
              {data.stargazers_count > 9999
                ? `${Math.round(data.stargazers_count / 1000)}k`
                : data.stargazers_count}
            </StarContainer>
          ) : (
            <React.Fragment></React.Fragment>
          )}

          {data.language !== null ? (
            <React.Fragment>
              <LanguageContainer>
                <LanguageIcon />
                {data.language}
              </LanguageContainer>
            </React.Fragment>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </OtherContainer>
      </Content>
    </ItemContainer>
  )
}

export { Item }
