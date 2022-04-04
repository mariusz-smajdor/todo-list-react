import { queryParamName } from "../searchQueryParamName"
import Input from "../../Input"
import { Wrapper } from "./styled"
import { useReplaceQueryParameter } from "../queryParameters"

const Search = () => {
  const { searchHandler, query } = useReplaceQueryParameter(queryParamName)

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={(event) => searchHandler(event.target.value.trim())}
      />
    </Wrapper>
  )
}

export default Search