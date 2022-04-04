import { takeEvery, call, put, select } from "redux-saga/effects"
import { getExampleTasks } from "./getExampleTasks"
import { saveTasksInLocalStorage } from "./tasksLocalStorage"
import { fetchExampleTasks, selectTasks, setExampleTasks } from "./tasksSlice"

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks)
    yield put(setExampleTasks(exampleTasks))
  } catch (error) {
    yield call(alert, "Nie udało się pobrać przykładowych zadań, spróbuj ponownie później 🤕")
  }
}

function* saveTasksInLocalStorageHandler() {
  const { tasks } = yield select(selectTasks)
  yield call(saveTasksInLocalStorage, tasks)
}

export function* tasksSaga() {
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler)
  yield takeEvery("*", saveTasksInLocalStorageHandler)
}