import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { setLoader, deleteLoader } from './LoaderAction'
import { DispatchFilterType, RootState } from '../../types'

const setLanguageFilter = (
  language: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(setLoader())

    dispatch({
      type: 'SET-LANGUAGE-FILTER',
      payload: {
        language,
        isPerPage: getState().filter.isPerPage,
      },
    })

    dispatch(deleteLoader())
  }
}

const setPeerPageFilter = (
  isPerPage: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch: DispatchFilterType, getState) => {
    dispatch({
      type: 'SET-PER-PAGE-FILTER',
      payload: {
        language: getState().filter.language,
        isPerPage,
      },
    })
  }
}

const clearFilter = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch: DispatchFilterType, getState) => {
    dispatch({
      type: 'CLEAR-FILTER',
      payload: {
        language: 'Any',
        isPerPage: getState().filter.isPerPage,
      },
    })
  }
}

export { setLanguageFilter, setPeerPageFilter, clearFilter }
