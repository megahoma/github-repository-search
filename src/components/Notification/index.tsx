import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../types'

import { Container, Wrapper, Icon, Message } from './styles'

const Notification = (): JSX.Element => {
  const notification = useSelector((state: RootState) => state.notification)

  if (notification.message === null) {
    return <React.Fragment></React.Fragment>
  }

  return (
    <React.Fragment>
      <Container
        color={
          notification.status !== null
            ? notification.status > 300
              ? '#d32f2f'
              : '#2e7d32'
            : ''
        }
      >
        <Wrapper>
          <Icon
            color={
              notification.status !== null
                ? notification.status > 300
                  ? `${process.env.PUBLIC_URL}/images/icon-error.svg`
                  : `${process.env.PUBLIC_URL}/images/icon-success.svg`
                : ''
            }
          />
          <Message>{notification.message}</Message>
        </Wrapper>
      </Container>
    </React.Fragment>
  )
}

export default Notification
