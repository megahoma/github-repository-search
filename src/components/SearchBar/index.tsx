import React from 'react'

import { Container, SearchIcon, Input, ErrorMessage, Button } from './styles'

const SearchBar = (): JSX.Element => {
  const [value, setValue] = React.useState<string>('')
  const [errorMessage, setErrorMessage] = React.useState<boolean>(true)

  const handleSubmit = () => {
    console.log(value)
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
