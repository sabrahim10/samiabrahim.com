import React from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'
import 'normalize-css/normalize.css'
import 'font-awesome/css/font-awesome.css'
import 'hamburgers/dist/hamburgers.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const globalStyle = () => injectGlobal`
  body {
    overflow-x: hidden;
    font-family: Raleway, Arial, Helvetica, sans-serif;
  }
`

globalStyle()

render(<App />, document.getElementById('root'))
registerServiceWorker()
