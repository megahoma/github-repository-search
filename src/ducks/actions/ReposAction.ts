import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import { setNotification } from './notificationAction'
import { setLoader, deleteLoader } from './LoaderAction'
import { clearFilter } from './FilterAction'

import { RootState, ReposState, IRepository } from '../../types'

const baseUrl: string = 'https://api.github.com'

const setRepos = (
  searchText: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(setLoader())

      const { data } = (await axios.get(
        `${baseUrl}/search/repositories?q=${searchText}`
      )) as { data: ReposState }

      const newDate: ReposState = {
        ...data,
        items: data.items.map((item: IRepository) => ({
          full_name: item.full_name,
          description: item.description,
          html_url: item.html_url,
          topics: item.topics === null ? [] : item.topics,
          stargazers_count: item.stargazers_count,
          language: item.language,
          updated_at: item.updated_at,
        })),
        language: Array.from(
          new Set(data.items.map((item) => item.language))
        ).sort() as Array<string>,
      }

      dispatch(clearFilter())

      dispatch({
        type: 'NEW-REPOS',
        payload: newDate,
      })
      dispatch(deleteLoader())
    } catch (error: any) {
      dispatch(setNotification('Unknown Error', 400, 3))
    }
  }
}

export { setRepos }
