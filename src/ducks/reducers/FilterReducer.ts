import { FilterRootState, FilterAction } from '../../types'

const initialState: FilterRootState = {
  language: 'Any',
  perPage: [10, 30, 100],
  isPerPage: 30,
}

const FilterReducer = (
  state: FilterRootState = initialState,
  action: FilterAction
): FilterRootState => {
  switch (action.type) {
    case 'SET-LANGUAGE-FILTER':
    case 'CLEAR-FILTER':
      return {
        ...state,
        language: action.payload.language,
        isPerPage: action.payload.isPerPage,
      }
    case 'SET-PER-PAGE-FILTER':
      return {
        ...state,
        language: action.payload.language,
        isPerPage: action.payload.isPerPage,
      }
    default:
      return state
  }
}

export default FilterReducer
