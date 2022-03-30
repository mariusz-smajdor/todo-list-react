import { useState, useRef } from "react"
import { Wrapper, Input, Button } from "./styled"

const Form = props => {
  const [newTaskContent, setNewTaskContent] = useState("")
  const inputRef = useRef(null)

  const formSubmitHandler = event => {
    event.preventDefault()

    if (newTaskContent.trim() === "") {
      inputRef.current.focus()
      return
    }

    props.onAddTask(newTaskContent)

    setNewTaskContent("")
    inputRef.current.focus()
  }

  return (
    <Wrapper onSubmit={formSubmitHandler}>
      <Input
        type="text"
        placeholder="Co jest do zrobienia?"
        value={newTaskContent}
        onChange={event => setNewTaskContent(event.target.value)}
        ref={inputRef}
      />
      <Button type="submit">
        Dodaj zadanie
      </Button>
    </Wrapper>
  )
}

export default Form
