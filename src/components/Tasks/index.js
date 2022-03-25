import { List, Item, Button, TaskText } from "./styled"

const Tasks = props => {
  return (
    <List>
      {props.tasks.map(task => {
        return (
          <Item
            key={task.id}
            styledHidden={task.done && props.hideDone}
          >
            <Button
              onClick={() => { props.onToggleDone(task.id) }}
              styledToggle
            >
              {task.done ? "✖" : "✔"}
            </Button>
            <TaskText styledDone={task.done}>
              {task.content}
            </TaskText>
            <Button
              onClick={() => { props.onRemoveTask(task.id) }}
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

export default Tasks