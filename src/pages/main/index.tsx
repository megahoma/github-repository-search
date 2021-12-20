import React from 'react'

import SearchBar from '../../components/SearchBar'
import ReposList from '../../components/ReposList'
import FilterPanel from '../../components/FilterPanel'

const MainPage = (): JSX.Element => {
  return (
    <React.Fragment>
      <SearchBar />
      <FilterPanel />

      <ReposList />
    </React.Fragment>
  )
}

export default MainPage
