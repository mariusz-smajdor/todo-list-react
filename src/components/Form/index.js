import { useState, useRef } from "react"

import "./style.css"

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
    <form className="form" onSubmit={formSubmitHandler}>
      <input
        className="form__field"
        type="text"
        placeholder="Co jest do zrobienia?"
        value={newTaskContent}
        onChange={event => setNewTaskContent(event.target.value)}
        ref={inputRef}
      />
      <button className="form__button" type="submit">
        Dodaj zadanie
      </button>
    </form>
  )
}

export default Form
