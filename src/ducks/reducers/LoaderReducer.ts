import { LoaderRootState, LoaderAction } from '../../types'

const initialState: LoaderRootState = {
  status: false,
}

const LoaderReducer = (
  state: LoaderRootState = initialState,
  action: LoaderAction
): LoaderRootState => {
  switch (action.type) {
    case 'NEW-LOADER':
      return {
        status: action.payload.status,
      }
    case 'DELETE-LOADER':
      return {
        status: action.payload.status,
      }
    default:
      return state
  }
}

export default LoaderReducer
