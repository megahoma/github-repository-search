import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../types'

import { PerPageFilter } from './PerPageFilter'
import { LanguageFilter } from './LanguageFilter'

import { Container } from './styles'

const FilterPanel = (): JSX.Element => {
  const reposItems = useSelector((state: RootState) => state.repos.items.length)

  return (
    <React.Fragment>
      <Container>
        <PerPageFilter />
        {reposItems > 0 ? (
          <LanguageFilter />
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </Container>
    </React.Fragment>
  )
}

export default FilterPanel
