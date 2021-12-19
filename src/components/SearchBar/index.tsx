import React from 'react'
import { useDispatch } from 'react-redux'
import { setRepos } from '../../ducks/actions/ReposAction'

import { Container, SearchIcon, Input, ErrorMessage, Button } from './styles'

const SearchBar = (): JSX.Element => {
  const dispatch = useDispatch()
  const [value, setValue] = React.useState<string>('')
  const [errorMessage, setErrorMessage] = React.useState<boolean>(false)

  const handleSubmit = () => {
    if (value.length > 0) {
      setErrorMessage(false)
      dispatch(setRepos(value))
    } else {
      setErrorMessage(true)
    }
  }

  return (
    <React.Fragment>
      <Container>
        <SearchIcon />
        <Input
          type="text"
          placeholder="Search GitHub repos..."
          value={value}
          onChange={(event) => {
            setValue(event.target.value)
          }}
        />
        {errorMessage ? (
          <ErrorMessage>No results</ErrorMessage>
        ) : (
          <React.Fragment></React.Fragment>
        )}
        <Button type="submit" onClick={handleSubmit}>
          Search
        </Button>
      </Container>
    </React.Fragment>
  )
}

export default SearchBar
