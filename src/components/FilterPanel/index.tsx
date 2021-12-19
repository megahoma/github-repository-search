import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRepos } from '../../ducks/actions/ReposAction'
import { RootState } from '../../types'

import { LanguageFilter } from './LanguageFilter'
import { Container } from './styles'

const FilterPanel = (): JSX.Element => {
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <Container>
        <LanguageFilter />
      </Container>
    </React.Fragment>
  )
}

export default FilterPanel
