import "./style.css"

const Tasks = props => {
  return (
    <ul className="tasks">
      {props.tasks.map(task => {
        return (
          <li key={task.id} className={`tasks__item ${task.done && props.hideDone ? "task__item--hidden" : ""}`}>
            <button className="tasks__button">
              {task.done ? "✖" : "✔"}
            </button>
            <span className={task.done ? "tasks__text--done" : ""}>
              {task.content}
            </span>
            <button className="tasks__button tasks__button--remove" onClick={() => { props.onRemoveTask(task.id) }}>
              🗑️
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default Tasks