import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPeerPageFilter } from '../../ducks/actions/FilterAction'
import { RootState } from '../../types'

import { ContainerFilter, Label, Select, Option } from './styles'

const PerPageFilter = (): JSX.Element => {
  const dispatch = useDispatch()
  const perPage = useSelector(
    (state: RootState) => state.filter.perPage
  ) as Array<number>
  const isPerPage = useSelector((state: RootState) => state.filter.isPerPage)

  return (
    <React.Fragment>
      <ContainerFilter>
        <Label>Per page</Label>
        <Select
          name="select"
          defaultValue={isPerPage}
          onChange={(event) => {
            const value = Number(event.target.value)
            dispatch(setPeerPageFilter(value))
          }}
        >
          {perPage.map((el, i) => (
            <Option key={i} value={el}>
              {el}
            </Option>
          ))}
        </Select>
      </ContainerFilter>
    </React.Fragment>
  )
}

export { PerPageFilter }
