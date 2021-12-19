import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { DispatchFilterType, RootState } from '../../types'

const setFilter = (
  language: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch: DispatchFilterType) => {
    dispatch({
      type: 'SET-FILTER',
      payload: {
        language,
      },
    })
  }
}
const clearFilter = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch: DispatchFilterType) => {
    dispatch({
      type: 'CLEAR-FILTER',
      payload: {
        language: 'Any',
      },
    })
  }
}

export { setFilter, clearFilter }
