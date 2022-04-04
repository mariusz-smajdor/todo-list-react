import { useSelector, useDispatch } from "react-redux"
import { toTask } from "../../../../../routes"
import { selectTasks, toggleDone, removeTask } from "../../tasksSlice"
import { useQueryParameter } from "../queryParameters"
import { queryParamName } from "../searchQueryParamName"
import { List, Item, Button, TaskText, StyledLink } from "./styled"

const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasks)

  const query = useQueryParameter(queryParamName)

  const selectTaskByQuery =
    !query || query.trim === "" ?
      tasks :
      tasks.filter(task => task.content.toLowerCase().includes(query.trim().toLowerCase()))

  const dispatch = useDispatch()

  return (
    <List>
      {selectTaskByQuery.map(task => {
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
              <StyledLink to={toTask({ id: task.id })}>{task.content}</StyledLink>
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