import { Scenes } from 'external/scenes'
import { ErrorBoundary } from 'external/scenes/error'
import { createBrowserHistory } from 'history'
import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Bootstrap } from './bootstrap'
import { configureStore } from './redux'

export const history = createBrowserHistory()
export const store = configureStore(history, window.__INITIAL_DATA__)

class AppComponent extends React.PureComponent {
  public render() {
    return (
      <ErrorBoundary>
        <Provider store={store}>
          <Bootstrap>
            <ConnectedRouter history={history}>
              <Scenes />
            </ConnectedRouter>
          </Bootstrap>
        </Provider>
      </ErrorBoundary>
    )
  }
}

// tslint:disable-next-line:variable-name
export const App =
  process.env.NODE_ENV !== 'production'
    ? hot(module)(AppComponent)
    : AppComponent
