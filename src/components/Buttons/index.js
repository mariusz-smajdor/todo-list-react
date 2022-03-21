import { Fragment } from "react"
import "./style.css"

const Buttons = props => {
  return (
    <div className="buttons">
      {props.tasks.length > 0 && (
        <Fragment>
          <button className="buttons__button" onClick={props.onToggleHideDone}>
            {props.hideDone ? "Pokaż" : "Ukryj"} ukończone
          </button>
          <button className="buttons__button" disabled={props.tasks.every(task => task.done)} >
            Ukończ wszystkie
          </button>
        </Fragment>
      )}
    </div>
  )
}

export default Buttons