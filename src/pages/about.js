import React from "react"
import Navbar from "../components/Navbar.tsx"
import "../css/about.css"

export default function About() {
  return (
    <div className="about">
      <Navbar current="about" />
      <h1>About</h1>
    </div>
  )
}
