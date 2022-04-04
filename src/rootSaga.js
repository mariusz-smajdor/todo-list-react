import { all } from "redux-saga/effects"
import { tasksSaga } from "./components/features/tasks/tasksSaga"

export default function* rootSaga() {
  yield all([
    tasksSaga()
  ])
}