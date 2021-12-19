import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../types'

import { Container, LoaderImg } from './styles'
import image from './loader.svg'

const Loader = (): JSX.Element => {
  const isLoader = useSelector((state: RootState) => state.isLoader)

  return (
    <React.Fragment>
      {isLoader.status ? (
        <Container>
          <LoaderImg src={image} alt="loader" />
        </Container>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Loader
