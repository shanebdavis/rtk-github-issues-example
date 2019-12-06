import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'hooks-for-redux'
import { setCurrentPage } from 'redux/issuesDisplay'

import './index.css'

const render = () => {
  const { App } = require('./components/App')

  ReactDOM.render(
    <Provider><App /></Provider>,
    document.getElementById('root')
  )
}

render()
setCurrentPage(1)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App', render)
}
