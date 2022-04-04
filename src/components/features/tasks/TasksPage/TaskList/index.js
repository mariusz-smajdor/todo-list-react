import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import { selectTasks, toggleDone, removeTask } from "../../tasksSlice"
import { List, Item, Button, TaskText } from "./styled"

const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasks)

  const dispatch = useDispatch()

  return (
    <List>
      {tasks.map(task => {
        return (
          <Item
            key={task.id}
            styledHidden={task.done && hideDone}
          >
            <Button
              onClick={() => dispatch(toggleDone(task.id))}
              styledToggle
            >
              {task.done ? "✖" : "✔"}
            </Button>
            <TaskText styledDone={task.done}>
              <Link to={`/zadania/${task.id}`}>{task.content}</Link>
            </TaskText>
            <Button
              onClick={() => dispatch(removeTask(task.id))}
              styledRemove
            >
              🗑️
            </Button>
          </Item>
        )
      })}
    </List>
  )
}

export default TaskList