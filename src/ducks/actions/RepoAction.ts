import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import { setNotification } from './notificationAction'
import { setLoader, deleteLoader } from './LoaderAction'

import {
  RootState,
  RepoState,
  IRepoOwner,
  IRepoLicense,
  DispatchRepoType,
} from '../../types'

const baseUrl: string = 'https://api.github.com'

const setRepo = (
  url: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(setLoader())

      const { data } = (await axios.get(`${baseUrl}/repos/${url}`)) as {
        data: RepoState
      }

      const newData: RepoState = {
        id: data.id,
        full_name: data.full_name,
        owner: {
          id: data.owner.id,
          login: data.owner.login,
          avatar_url: data.owner.avatar_url,
          html_url: data.owner.html_url,
          url: data.owner.url,
          type: data.owner.type,
        },
        html_url: data.html_url,
        url: data.url,
        description: data.description,
        created_at: data.created_at,
        updated_at: data.updated_at,
        clone_url: data.clone_url,
        stargazers_count: data.stargazers_count,
        language: data.language,
        forks_count: data.forks_count,
        license:
          data.license === null
            ? null
            : {
                key: data.license?.key,
                name: data.license?.name,
                spdx_id: data.license?.spdx_id,
                url: data.license?.url,
              },
      }

      dispatch({
        type: 'NEW-REPO',
        payload: newData,
      })

      dispatch(deleteLoader())
    } catch (error: any) {
      dispatch(setNotification('Unknown Error', 400, 3))
    }
  }
}

export { setRepo }
