import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguageFilter } from '../../ducks/actions/FilterAction'
import { RootState } from '../../types'

import { ContainerFilter, Label, Select, Option } from './styles'

const LanguageFilter = (): JSX.Element => {
  const dispatch = useDispatch()
  const language = useSelector((state: RootState) => state.repos.language)
  const isLanguage = useSelector((state: RootState) => state.filter.language)

  return (
    <React.Fragment>
      <ContainerFilter>
        <Label>Language</Label>
        <Select
          name="select"
          defaultValue={isLanguage}
          onChange={(event) => {
            dispatch(setLanguageFilter(event.target.value))
          }}
        >
          <Option value="Any">Any</Option>
          {language.map((el, i) => (
            <Option key={i} value={el}>
              {el}
            </Option>
          ))}
        </Select>
      </ContainerFilter>
    </React.Fragment>
  )
}

export { LanguageFilter }
