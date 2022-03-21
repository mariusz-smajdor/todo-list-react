import { useState } from "react"

import "./style.css"

const Form = props => {
  const [newTaskContent, setNewTaskContent] = useState("")

  const formSubmitHandler = event => {
    event.preventDefault()

    if (newTaskContent.trim() === "") return

    props.onAddTask(newTaskContent)

    setNewTaskContent("")
  }

  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <input
        className="form__field"
        type="text"
        placeholder="Co jest do zrobienia?"
        value={newTaskContent}
        onChange={event => setNewTaskContent(event.target.value)}
      />
      <button className="form__button" type="submit">
        Dodaj zadanie
      </button>
    </form>
  )
}

export default Form
