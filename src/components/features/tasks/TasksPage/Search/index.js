import { useHistory } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { queryParamName } from "../searchQueryParamName"
import Input from "../../Input"
import { Wrapper } from "./styled"

const Search = () => {
  const location = useLocation()
  const history = useHistory()
  const query = (new URLSearchParams(location.search)).get(queryParamName)

  const onInputChange = event => {
    const searchParams = new URLSearchParams(location.search)

    if (event.target.value.trim() === "") {
      searchParams.delete(queryParamName)
    } else {
      searchParams.set(queryParamName, event.target.value)
    }

    history.push(`${location.pathname}?${searchParams.toString()}`)
  }

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  )
}

export default Search