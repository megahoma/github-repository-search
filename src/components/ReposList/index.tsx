import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../types'

import { Item } from './item'
import { Container, Title } from './styles'

const ReposList = (): JSX.Element => {
  const repos = useSelector((state: RootState) => state.repos)

  return (
    <React.Fragment>
      {repos.items.length > 0 ? (
        <Container>
          <Title>
            {repos.total_count.toLocaleString('en-IN')} repository results
          </Title>
          {repos.items.map((item) => (
            <Item key={item.full_name} data={item} />
          ))}
        </Container>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </React.Fragment>
  )
}

export default ReposList
