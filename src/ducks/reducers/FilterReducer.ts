import { FilterRootState, FilterAction } from '../../types'

const initialState: FilterRootState = {
  language: 'Any',
}

const FilterReducer = (
  state: FilterRootState = initialState,
  action: FilterAction
): FilterRootState => {
  switch (action.type) {
    case 'SET-FILTER':
    case 'CLEAR-FILTER':
      return {
        language: action.payload.language,
      }
    default:
      return state
  }
}

export default FilterReducer
