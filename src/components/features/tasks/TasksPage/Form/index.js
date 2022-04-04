import { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"

import { addTask } from "../../tasksSlice"
import { Wrapper, Input, Button } from "./styled"

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("")
  const inputRef = useRef(null)

  const dispatch = useDispatch()

  const formSubmitHandler = event => {
    event.preventDefault()

    if (newTaskContent.trim() === "") {
      inputRef.current.focus()
      return
    }

    dispatch(addTask({
      content: newTaskContent,
      done: false,
      id: nanoid()
    }))

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
