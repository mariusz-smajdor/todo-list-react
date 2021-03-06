import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"
import { Provider } from "react-redux"

import App from "./App"
import { theme } from "./theme"
import { GlobalStyle } from "./GlobalStyle"
import store from "./store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode >,
  document.getElementById("root")
)
