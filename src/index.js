import React from "react"
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom"
import './styles.scss'
import App from "./app.js"

ReactDOM.render(
<BrowserRouter>
    <App/>
</BrowserRouter>

, document.getElementById("root") )
