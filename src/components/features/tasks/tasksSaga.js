import { takeEvery, call, put } from "redux-saga/effects"
import { getExampleTasks } from "./getExampleTasks"
import { fetchExampleTasks, setExampleTasks } from "./tasksSlice"

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks)
    yield put(setExampleTasks(exampleTasks))
  } catch (error) {
    yield call(alert, "Nie udało się pobrać przykładowych zadań, spróbuj ponownie później 🤕")
  }
}

export function* watchFetchExampleTasks() {
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler)
}