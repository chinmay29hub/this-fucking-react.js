import React from "react"
// import ReactDOM from "react-dom"
import { createRoot } from "react-dom/client"

const element = <h1>Hello World</h1>

// console.log(element)
// ReactDOM.render(element, document.getElementById("root"))
const container = document.getElementById("root")
const root = createRoot(container)
root.render(element)