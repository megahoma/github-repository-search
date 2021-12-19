import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../ducks/actions/FilterAction'
import { RootState } from '../../types'

import { ContainerSelect, Label, Select, Option } from './styles'

const LanguageFilter = (): JSX.Element => {
  const dispatch = useDispatch()
  const language = useSelector((state: RootState) => state.repos.language)
  const isLanguage = useSelector((state: RootState) => state.filter.language)

  return (
    <React.Fragment>
      <ContainerSelect>
        <Label>Language</Label>
        <Select
          name="select"
          defaultValue={isLanguage}
          onChange={(event) => {
            dispatch(setFilter(event.target.value))
          }}
        >
          <Option value="Any">Any</Option>
          {language.map((el, i) => (
            <Option key={i} value={el}>
              {el}
            </Option>
          ))}
        </Select>
      </ContainerSelect>
    </React.Fragment>
  )
}

export { LanguageFilter }
