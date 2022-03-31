import { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"

import { markAllDone, selectTasks, toggleHideDone } from "../tasksSlice"
import { Wrapper, Button } from "./styled"

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks)
  const dispatch = useDispatch()

  return (
    <Wrapper>
      {tasks.length > 0 && (
        <Fragment>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            disabled={tasks.every(task => task.done)}
            onClick={() => dispatch(markAllDone())}
          >
            Ukończ wszystkie
          </Button>
        </Fragment>
      )}
    </Wrapper>
  )
}

export default Buttons