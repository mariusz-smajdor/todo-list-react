import { useLocation, useHistory } from "react-router-dom"

export const useQueryParameter = key => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  return searchParams.get(key)
}

export const useReplaceQueryParameter = (key) => {
  const location = useLocation()
  const history = useHistory()
  const searchParams = new URLSearchParams(location.search)
  const query = searchParams.get(key)

  const searchHandler = (value) => {
    if (value === "") {
      searchParams.delete(key)
    } else {
      searchParams.set(key, value)
    }

    history.push(`${location.pathname}?${searchParams.toString()}`)
  }

  return { searchHandler, query }
}