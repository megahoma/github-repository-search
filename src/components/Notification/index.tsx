import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../types'
import { Container } from './styles'

import Item from './item'

const Notifications = (): JSX.Element => {
  const notification = useSelector((state: RootState) => state.notification)

  return (
    <Container>
      {notification.map((el, i) => (
        <Item key={el.id} message={el.message} status={el.status} />
      ))}
    </Container>
  )
}

export default Notifications
