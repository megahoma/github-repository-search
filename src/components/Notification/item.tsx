import React from 'react'

import { NotificationStatus } from '../../types'
import { Notification, Icon, Message } from './styles'

import IconInfo from '../../assets/icon/icon-info.svg'
import IconSuccess from '../../assets/icon/icon-success.svg'
import IconError from '../../assets/icon/icon-error.svg'

interface Props {
  message: string
  status: NotificationStatus
}

const Item: React.FC<Props> = ({ message, status }) => {
  if (status === 'info') {
    return (
      <Notification color="#0288d1">
        <Icon src={IconInfo} alt="icon" />
        <Message>{message}</Message>
      </Notification>
    )
  } else if (status === 'success') {
    return (
      <Notification color="#2e7d32">
        <Icon src={IconSuccess} alt="icon" />
        <Message>{message}</Message>
      </Notification>
    )
  } else {
    return (
      <Notification color="#df2b2b">
        <Icon src={IconError} alt="icon" />
        <Message>{message}</Message>
      </Notification>
    )
  }
}

export default Item
