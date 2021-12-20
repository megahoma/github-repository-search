import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setRepo } from '../../ducks/actions/RepoAction'
import Repo from '../../components/Repo'

interface RouteParams {
  author: string
  name: string
}

const RepoPage = (): JSX.Element => {
  const params = useParams<RouteParams>()
  const dispatch = useDispatch()

  React.useEffect(() => {
    const url: string = `${params.author}/${params.name}`
    dispatch(setRepo(url))
  }, [dispatch, params.author, params.name])
  return (
    <React.Fragment>
      <Repo name={params.name} />
    </React.Fragment>
  )
}

export default RepoPage
