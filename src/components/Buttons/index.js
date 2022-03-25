import { Fragment } from "react"
import { Wrapper, Button } from "./styled"

const Buttons = props => {
  return (
    <Wrapper>
      {props.tasks.length > 0 && (
        <Fragment>
          <Button onClick={props.onToggleHideDone}>
            {props.hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            disabled={props.tasks.every(task => task.done)}
            onClick={props.onMarkAllDone}
          >
            Ukończ wszystkie
          </Button>
        </Fragment>
      )}
    </Wrapper>
  )
}

export default Buttons